import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where
} from "./chunk-6U66OTJU.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QO3DPW6E.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YFKO4TLY.js";

// node_modules/uuid/dist/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/uuid/dist/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = { randomUUID };

// node_modules/uuid/dist/v4.js
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  return _v4(options, buf, offset);
}
var v4_default = v4;

// src/app/services/firestore.service.ts
var FirestoreService = class _FirestoreService {
  fs = inject(Firestore);
  // ====== KIDS ======
  addKid(parentUid, data) {
    return __async(this, null, function* () {
      const id = v4_default();
      const kid = {
        id,
        parent_uid: parentUid,
        name: data.name,
        age: data.age,
        avatar: data.avatar || "panda",
        grade: data.grade || "",
        ui_theme: data.ui_theme || "neutral",
        pin: data.pin || "",
        level: 1,
        xp: 0,
        credit_score: 500,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      yield setDoc(doc(this.fs, "kids", id), kid);
      const balance = data.starting_balance || 0;
      const wallet = { kid_id: id, balance, total_earned: balance, total_spent: 0, total_saved: 0 };
      yield setDoc(doc(this.fs, "wallets", id), wallet);
      if (balance > 0) {
        yield this.addTransaction(id, "credit", balance, "Starting balance", "initial");
      }
      return kid;
    });
  }
  getKids(parentUid) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "kids"), where("parent_uid", "==", parentUid));
      const snap = yield getDocs(q);
      return snap.docs.map((d) => d.data());
    });
  }
  getKid(kidId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "kids", kidId));
      return snap.exists() ? snap.data() : null;
    });
  }
  updateKid(kidId, data) {
    return __async(this, null, function* () {
      yield updateDoc(doc(this.fs, "kids", kidId), data);
    });
  }
  deleteKid(kidId) {
    return __async(this, null, function* () {
      yield deleteDoc(doc(this.fs, "kids", kidId));
      yield deleteDoc(doc(this.fs, "wallets", kidId));
      const collections = ["transactions", "tasks", "goals", "sips", "loans", "learning_progress"];
      for (const col of collections) {
        const q = query(collection(this.fs, col), where("kid_id", "==", kidId));
        const snap = yield getDocs(q);
        for (const d of snap.docs)
          yield deleteDoc(d.ref);
      }
    });
  }
  // ====== WALLET ======
  getWallet(kidId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "wallets", kidId));
      return snap.exists() ? snap.data() : { kid_id: kidId, balance: 0, total_earned: 0, total_spent: 0, total_saved: 0 };
    });
  }
  creditWallet(kidId, amount) {
    return __async(this, null, function* () {
      yield updateDoc(doc(this.fs, "wallets", kidId), { balance: increment(amount), total_earned: increment(amount) });
    });
  }
  debitWallet(kidId, amount) {
    return __async(this, null, function* () {
      const wallet = yield this.getWallet(kidId);
      if (wallet.balance < amount)
        throw new Error("Insufficient balance");
      yield updateDoc(doc(this.fs, "wallets", kidId), { balance: increment(-amount), total_spent: increment(amount) });
    });
  }
  saveFromWallet(kidId, amount) {
    return __async(this, null, function* () {
      const wallet = yield this.getWallet(kidId);
      if (wallet.balance < amount)
        throw new Error("Insufficient balance");
      yield updateDoc(doc(this.fs, "wallets", kidId), { balance: increment(-amount), total_saved: increment(amount) });
    });
  }
  // ====== TRANSACTIONS ======
  addTransaction(kidId, type, amount, description, category, referenceId) {
    return __async(this, null, function* () {
      const txn = {
        id: v4_default(),
        kid_id: kidId,
        type,
        amount,
        description,
        category,
        reference_id: referenceId || "",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      yield setDoc(doc(this.fs, "transactions", txn.id), txn);
    });
  }
  getTransactions(kidId, max = 50) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "transactions"), where("kid_id", "==", kidId), orderBy("created_at", "desc"), limit(max));
      const snap = yield getDocs(q);
      return snap.docs.map((d) => d.data());
    });
  }
  // ====== TASKS ======
  createTask(parentUid, kidId, data) {
    return __async(this, null, function* () {
      const task = {
        id: v4_default(),
        parent_uid: parentUid,
        kid_id: kidId,
        title: data.title,
        description: data.description || "",
        reward_amount: data.reward_amount,
        penalty_amount: data.penalty_amount || 0,
        frequency: data.frequency || "one-time",
        approval_required: data.approval_required !== false,
        status: "pending",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      yield setDoc(doc(this.fs, "tasks", task.id), task);
      return task;
    });
  }
  getTasks(kidId) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "tasks"), where("kid_id", "==", kidId), orderBy("created_at", "desc"));
      const snap = yield getDocs(q);
      return snap.docs.map((d) => d.data());
    });
  }
  completeTask(taskId, kidId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "tasks", taskId));
      const task = snap.data();
      if (task.approval_required) {
        yield updateDoc(doc(this.fs, "tasks", taskId), { status: "completed" });
      } else {
        yield updateDoc(doc(this.fs, "tasks", taskId), { status: "approved" });
        yield this.creditWallet(kidId, task.reward_amount);
        yield this.addTransaction(kidId, "credit", task.reward_amount, `Task reward: ${task.title}`, "task", taskId);
        yield this.addXp(kidId, 10);
        yield this.updateCreditScore(kidId, 10);
      }
      return __spreadProps(__spreadValues({}, task), { status: task.approval_required ? "completed" : "approved" });
    });
  }
  approveTask(taskId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "tasks", taskId));
      const task = snap.data();
      yield updateDoc(doc(this.fs, "tasks", taskId), { status: "approved" });
      yield this.creditWallet(task.kid_id, task.reward_amount);
      yield this.addTransaction(task.kid_id, "credit", task.reward_amount, `Task approved: ${task.title}`, "task", taskId);
      yield this.addXp(task.kid_id, 10);
      yield this.updateCreditScore(task.kid_id, 10);
    });
  }
  rejectTask(taskId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "tasks", taskId));
      const task = snap.data();
      yield updateDoc(doc(this.fs, "tasks", taskId), { status: "rejected" });
      if (task.penalty_amount > 0) {
        try {
          yield this.debitWallet(task.kid_id, task.penalty_amount);
          yield this.addTransaction(task.kid_id, "debit", task.penalty_amount, `Task penalty: ${task.title}`, "penalty", taskId);
        } catch {
        }
      }
      yield this.updateCreditScore(task.kid_id, -10);
    });
  }
  // ====== GOALS ======
  createGoal(parentUid, kidId, data) {
    return __async(this, null, function* () {
      const goal = {
        id: v4_default(),
        kid_id: kidId,
        parent_uid: parentUid,
        title: data.title,
        target_amount: data.target_amount,
        saved_amount: 0,
        deadline: data.deadline || "",
        status: "active",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      yield setDoc(doc(this.fs, "goals", goal.id), goal);
      return goal;
    });
  }
  getGoals(kidId) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "goals"), where("kid_id", "==", kidId));
      const snap = yield getDocs(q);
      return snap.docs.map((d) => d.data());
    });
  }
  contributeToGoal(goalId, kidId, amount) {
    return __async(this, null, function* () {
      yield this.saveFromWallet(kidId, amount);
      const snap = yield getDoc(doc(this.fs, "goals", goalId));
      const goal = snap.data();
      const newSaved = goal.saved_amount + amount;
      const status = newSaved >= goal.target_amount ? "completed" : "active";
      yield updateDoc(doc(this.fs, "goals", goalId), { saved_amount: newSaved, status });
      yield this.addTransaction(kidId, "debit", amount, `Goal savings: ${goal.title}`, "goal", goalId);
      yield this.addXp(kidId, 20);
      yield this.updateCreditScore(kidId, 5);
    });
  }
  deleteGoal(goalId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "goals", goalId));
      const goal = snap.data();
      if (goal.saved_amount > 0) {
        yield updateDoc(doc(this.fs, "wallets", goal.kid_id), { balance: increment(goal.saved_amount), total_saved: increment(-goal.saved_amount) });
        yield this.addTransaction(goal.kid_id, "credit", goal.saved_amount, `Goal refund: ${goal.title}`, "goal_refund", goalId);
      }
      yield deleteDoc(doc(this.fs, "goals", goalId));
    });
  }
  // ====== SIP ======
  createSIP(parentUid, kidId, data) {
    return __async(this, null, function* () {
      const sip = {
        id: v4_default(),
        kid_id: kidId,
        parent_uid: parentUid,
        amount: data.amount,
        interest_rate: data.interest_rate || 8,
        frequency: data.frequency || "monthly",
        total_invested: 0,
        current_value: 0,
        payments_made: 0,
        status: "active",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      yield setDoc(doc(this.fs, "sips", sip.id), sip);
      return sip;
    });
  }
  getSIPs(kidId) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "sips"), where("kid_id", "==", kidId));
      const snap = yield getDocs(q);
      return snap.docs.map((d) => d.data());
    });
  }
  paySIP(sipId, kidId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "sips", sipId));
      const sip = snap.data();
      yield this.saveFromWallet(kidId, sip.amount);
      const newInvested = sip.total_invested + sip.amount;
      const payments = sip.payments_made + 1;
      const monthlyRate = sip.interest_rate / 100 / 12;
      const newValue = monthlyRate > 0 ? sip.amount * ((Math.pow(1 + monthlyRate, payments) - 1) / monthlyRate) * (1 + monthlyRate) : newInvested;
      yield updateDoc(doc(this.fs, "sips", sipId), { total_invested: newInvested, current_value: Math.round(newValue * 100) / 100, payments_made: payments });
      yield this.addTransaction(kidId, "debit", sip.amount, `SIP payment #${payments}`, "sip", sipId);
      yield this.addXp(kidId, 15);
      yield this.updateCreditScore(kidId, 5);
    });
  }
  toggleSIP(sipId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "sips", sipId));
      const sip = snap.data();
      yield updateDoc(doc(this.fs, "sips", sipId), { status: sip.status === "active" ? "paused" : "active" });
    });
  }
  // ====== LOANS ======
  requestLoan(parentUid, kidId, data) {
    return __async(this, null, function* () {
      const monthlyRate = (data.interest_rate || 5) / 100 / 12;
      const months = data.duration_months || 6;
      const principal = data.principal;
      const emi = monthlyRate > 0 ? principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1) : principal / months;
      const loan = {
        id: v4_default(),
        kid_id: kidId,
        parent_uid: parentUid,
        principal,
        interest_rate: data.interest_rate || 5,
        duration_months: months,
        emi_amount: Math.round(emi * 100) / 100,
        remaining_balance: principal,
        payments_made: 0,
        purpose: data.purpose,
        status: "pending",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      yield setDoc(doc(this.fs, "loans", loan.id), loan);
      return loan;
    });
  }
  getLoans(kidId) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "loans"), where("kid_id", "==", kidId));
      const snap = yield getDocs(q);
      return snap.docs.map((d) => d.data());
    });
  }
  approveLoan(loanId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "loans", loanId));
      const loan = snap.data();
      yield updateDoc(doc(this.fs, "loans", loanId), { status: "active" });
      yield this.creditWallet(loan.kid_id, loan.principal);
      yield this.addTransaction(loan.kid_id, "credit", loan.principal, `Loan approved: ${loan.purpose}`, "loan", loanId);
    });
  }
  payLoanEMI(loanId, kidId) {
    return __async(this, null, function* () {
      const snap = yield getDoc(doc(this.fs, "loans", loanId));
      const loan = snap.data();
      const payAmount = Math.min(loan.emi_amount, loan.remaining_balance);
      yield this.debitWallet(kidId, payAmount);
      const newRemaining = Math.round((loan.remaining_balance - payAmount) * 100) / 100;
      const payments = loan.payments_made + 1;
      const status = newRemaining <= 0 ? "completed" : "active";
      yield updateDoc(doc(this.fs, "loans", loanId), { remaining_balance: Math.max(0, newRemaining), payments_made: payments, status });
      yield this.addTransaction(kidId, "debit", payAmount, `EMI payment #${payments}`, "emi", loanId);
      yield this.addXp(kidId, 15);
      yield this.updateCreditScore(kidId, 15);
    });
  }
  // ====== LEARNING ======
  getLearningProgress(kidId) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "learning_progress"), where("kid_id", "==", kidId));
      const snap = yield getDocs(q);
      return snap.docs.map((d) => d.data());
    });
  }
  completeLesson(kidId, storyId, score, rewardXp) {
    return __async(this, null, function* () {
      const q = query(collection(this.fs, "learning_progress"), where("kid_id", "==", kidId), where("story_id", "==", storyId));
      const snap = yield getDocs(q);
      if (!snap.empty) {
        const existing = snap.docs[0].data();
        if (score > existing.score) {
          yield updateDoc(snap.docs[0].ref, { score });
        }
        return { already_completed: true, xp_earned: 0 };
      }
      const progress = { id: v4_default(), kid_id: kidId, story_id: storyId, score, completed_at: (/* @__PURE__ */ new Date()).toISOString() };
      yield setDoc(doc(this.fs, "learning_progress", progress.id), progress);
      yield this.addXp(kidId, rewardXp);
      return { already_completed: false, xp_earned: rewardXp };
    });
  }
  // ====== HELPERS ======
  addXp(kidId, amount) {
    return __async(this, null, function* () {
      const kid = yield this.getKid(kidId);
      if (!kid)
        return;
      const newXp = kid.xp + amount;
      const { getLevelForXp } = yield import("./chunk-NXO727OU.js");
      const lvl = getLevelForXp(newXp);
      yield updateDoc(doc(this.fs, "kids", kidId), { xp: newXp, level: lvl.level });
    });
  }
  updateCreditScore(kidId, change) {
    return __async(this, null, function* () {
      const kid = yield this.getKid(kidId);
      if (!kid)
        return;
      const newScore = Math.max(0, Math.min(1e3, kid.credit_score + change));
      yield updateDoc(doc(this.fs, "kids", kidId), { credit_score: newScore });
    });
  }
  // ====== DASHBOARD DATA ======
  getKidDashboard(kidId) {
    return __async(this, null, function* () {
      const [kid, wallet, tasks, transactions, goals, sips, loans, learning] = yield Promise.all([
        this.getKid(kidId),
        this.getWallet(kidId),
        this.getTasks(kidId),
        this.getTransactions(kidId, 10),
        this.getGoals(kidId),
        this.getSIPs(kidId),
        this.getLoans(kidId),
        this.getLearningProgress(kidId)
      ]);
      const { getLevelForXp, getNextLevel } = yield import("./chunk-NXO727OU.js");
      const levelInfo = getLevelForXp(kid?.xp || 0);
      const nextLevel = getNextLevel(levelInfo.level);
      const activeTasks = tasks.filter((t) => t.status === "pending" || t.status === "completed");
      const activeGoals = goals.filter((g) => g.status === "active");
      const activeSips = sips.filter((s) => s.status === "active");
      const activeLoans = loans.filter((l) => l.status === "pending" || l.status === "active");
      return {
        kid,
        wallet,
        level_info: levelInfo,
        next_level: nextLevel,
        active_tasks: activeTasks,
        recent_transactions: transactions,
        active_goals: activeGoals,
        active_sips: activeSips,
        active_loans: activeLoans,
        learning_progress: learning,
        stats: {
          total_tasks_completed: tasks.filter((t) => t.status === "approved").length,
          total_stories_read: learning.length,
          active_goals_count: activeGoals.length,
          active_sips_count: activeSips.length
        }
      };
    });
  }
  getKidAchievements(kidId) {
    return __async(this, null, function* () {
      const [kid, tasks, learning, goals, sips, loans] = yield Promise.all([
        this.getKid(kidId),
        this.getTasks(kidId),
        this.getLearningProgress(kidId),
        this.getGoals(kidId),
        this.getSIPs(kidId),
        this.getLoans(kidId)
      ]);
      const tasksDone = tasks.filter((t) => t.status === "approved").length;
      const storiesDone = learning.length;
      const goalsDone = goals.filter((g) => g.status === "completed").length;
      const sipPayments = sips.reduce((sum, s) => sum + s.payments_made, 0);
      const loanPayments = loans.reduce((sum, l) => sum + l.payments_made, 0);
      const { getLevelForXp } = yield import("./chunk-NXO727OU.js");
      const levelInfo = getLevelForXp(kid?.xp || 0);
      const badges = [];
      if (tasksDone >= 1)
        badges.push({ name: "First Task", icon: "check-circle", desc: "Completed your first task" });
      if (tasksDone >= 10)
        badges.push({ name: "Task Pro", icon: "check-square", desc: "Completed 10 tasks" });
      if (storiesDone >= 1)
        badges.push({ name: "Bookworm", icon: "book-open", desc: "Read your first story" });
      if (storiesDone >= 5)
        badges.push({ name: "Scholar", icon: "graduation-cap", desc: "Read all stories" });
      if (goalsDone >= 1)
        badges.push({ name: "Goal Getter", icon: "target", desc: "Achieved your first goal" });
      if (sipPayments >= 3)
        badges.push({ name: "Investor", icon: "trending-up", desc: "Made 3 SIP payments" });
      if (loanPayments >= 1)
        badges.push({ name: "Responsible", icon: "shield", desc: "Made your first EMI payment" });
      if ((kid?.credit_score || 500) >= 700)
        badges.push({ name: "Credit Star", icon: "star", desc: "Credit score above 700" });
      return {
        badges,
        stats: { tasks_completed: tasksDone, stories_read: storiesDone, goals_achieved: goalsDone, sip_payments: sipPayments, loan_payments: loanPayments },
        level_info: levelInfo,
        credit_score: kid?.credit_score || 500,
        xp: kid?.xp || 0
      };
    });
  }
  static \u0275fac = function FirestoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FirestoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FirestoreService, factory: _FirestoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirestoreService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FirestoreService
};
//# sourceMappingURL=chunk-PU7NQC76.js.map
