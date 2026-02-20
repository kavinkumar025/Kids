import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-VL7AD74M.js";
import {
  ParentLayoutComponent
} from "./chunk-OW55KWIC.js";
import {
  FirestoreService
} from "./chunk-PU7NQC76.js";
import "./chunk-LDWUIQRB.js";
import {
  AuthService
} from "./chunk-6U66OTJU.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QO3DPW6E.js";
import {
  AVATARS,
  getAvatarColor,
  getLevelForXp
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/parent-dashboard.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function ParentDashboardPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 11)(4, "circle", 12)(5, "path", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 14);
    \u0275\u0275text(7, "Add Your First Child");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 15);
    \u0275\u0275text(9, "Get started by adding a child to manage their virtual finances.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddKid.set(true));
    });
    \u0275\u0275text(11, "Add Child");
    \u0275\u0275elementEnd()();
  }
}
function ParentDashboardPage_Conditional_13_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "polyline", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kid_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.getAvatarColor(kid_r4.avatar));
  }
}
function ParentDashboardPage_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_13_For_2_Template_div_click_0_listener() {
      const kid_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.auth.selectedKid.set(kid_r4));
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "h3", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ParentDashboardPage_Conditional_13_For_2_Conditional_9_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26);
    \u0275\u0275element(11, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 28)(13, "span", 29);
    \u0275\u0275text(14, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 31)(18, "span", 29);
    \u0275\u0275text(19, "Credit Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 32);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_18_0;
    let tmp_21_0;
    const kid_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ((tmp_11_0 = ctx_r1.auth.selectedKid()) == null ? null : tmp_11_0.id) === kid_r4.id ? ctx_r1.getAvatarColor(kid_r4.avatar) : "")("box-shadow", ((tmp_12_0 = ctx_r1.auth.selectedKid()) == null ? null : tmp_12_0.id) === kid_r4.id ? "0 0 0 2px " + ctx_r1.getAvatarColor(kid_r4.avatar) + "40" : "");
    \u0275\u0275attribute("data-testid", "kid-card-" + kid_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.getAvatarColor(kid_r4.avatar));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(kid_r4.name[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kid_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Level ", kid_r4.level, " \xB7 ", ctx_r1.getLevelName(kid_r4.xp));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_18_0 = ctx_r1.auth.selectedKid()) == null ? null : tmp_18_0.id) === kid_r4.id ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", kid_r4.xp % 100 / 100 * 100 + "%")("background-color", ctx_r1.getAvatarColor(kid_r4.avatar));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ((tmp_21_0 = ctx_r1.wallets()[kid_r4.id]) == null ? null : tmp_21_0.balance) || 0, " coins");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", kid_r4.credit_score >= 700 ? "#10B981" : kid_r4.credit_score >= 400 ? "#F59E0B" : "#EF4444");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", kid_r4.credit_score, " ");
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 69);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const task_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.approveTask(task_r6.id));
    });
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 70);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const task_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.rejectTask(task_r6.id));
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-testid", "approve-task-" + task_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-testid", "reject-task-" + task_r6.id);
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Pending");
    \u0275\u0275elementEnd();
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "p", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Conditional_6_Template, 5, 2, "div", 67)(7, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Conditional_7_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", task_r6.reward_amount, " coins");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r6.status === "completed" ? 6 : 7);
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "h3", 60);
    \u0275\u0275text(3, "Pending Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 62);
    \u0275\u0275repeaterCreate(7, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_For_8_Template, 8, 3, "div", 63, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dash_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", dash_r7.active_tasks.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(dash_r7.active_tasks.slice(0, 5));
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 6);
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 74);
    \u0275\u0275conditionalCreate(3, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_For_5_Conditional_3_Template, 1, 0, ":svg:path", 6)(4, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_For_5_Conditional_4_Template, 1, 0, ":svg:path", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 77);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", txn_r8.type === "credit" ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.10)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", txn_r8.type === "credit" ? "#10B981" : "#EF4444");
    \u0275\u0275advance();
    \u0275\u0275conditional(txn_r8.type === "credit" ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r8.description);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", txn_r8.type === "credit" ? "#10B981" : "#EF4444");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r8.type === "credit" ? "+" : "-", "", txn_r8.amount, " ");
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "h3", 71);
    \u0275\u0275text(2, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275repeaterCreate(4, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_For_5_Template, 9, 10, "div", 72, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dash_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(dash_r7.recent_transactions.slice(0, 5));
  }
}
function ParentDashboardPage_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 39);
    \u0275\u0275element(4, "rect", 40)(5, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p", 42);
    \u0275\u0275text(7, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 37)(11, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 45);
    \u0275\u0275element(13, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "p", 42);
    \u0275\u0275text(15, "Total Earned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 46);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 37)(19, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 48);
    \u0275\u0275element(21, "path", 49)(22, "polyline", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "p", 42);
    \u0275\u0275text(24, "Total Saved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 51);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 37)(28, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 53);
    \u0275\u0275element(30, "circle", 54)(31, "circle", 55)(32, "circle", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "p", 42);
    \u0275\u0275text(34, "Credit Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 43);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 57);
    \u0275\u0275conditionalCreate(38, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_38_Template, 9, 1, "div", 58);
    \u0275\u0275conditionalCreate(39, ParentDashboardPage_Conditional_13_Conditional_3_Conditional_39_Template, 6, 0, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dash_r7 = ctx;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(dash_r7.wallet.balance);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(dash_r7.wallet.total_earned);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(dash_r7.wallet.total_saved);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((dash_r7.kid == null ? null : dash_r7.kid.credit_score) || 500);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(dash_r7.active_tasks.length > 0 ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dash_r7.recent_transactions.length > 0 ? 39 : -1);
  }
}
function ParentDashboardPage_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ParentDashboardPage_Conditional_13_For_2_Template, 22, 20, "div", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParentDashboardPage_Conditional_13_Conditional_3_Template, 40, 6);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.auth.kids());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.selectedDashboard()) ? 3 : -1, tmp_2_0);
  }
}
function ParentDashboardPage_Conditional_14_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_14_For_28_Template_button_click_0_listener() {
      const av_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.kidForm.avatar = av_r11.id);
    });
    \u0275\u0275elementStart(1, "span", 99);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const av_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.kidForm.avatar === av_r11.id ? av_r11.color + "20" : "var(--muted)");
    \u0275\u0275classProp("ring-2", ctx_r1.kidForm.avatar === av_r11.id)("ring-offset-1", ctx_r1.kidForm.avatar === av_r11.id)("scale-105", ctx_r1.kidForm.avatar === av_r11.id);
    \u0275\u0275attribute("data-testid", "avatar-" + av_r11.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", av_r11.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(av_r11.id[0].toUpperCase());
  }
}
function ParentDashboardPage_Conditional_14_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_14_For_34_Template_button_click_0_listener() {
      const th_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.kidForm.ui_theme = th_r13.value);
    });
    \u0275\u0275element(1, "div", 101);
    \u0275\u0275elementStart(2, "p", 102);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const th_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r1.kidForm.ui_theme === th_r13.value ? th_r13.color : "transparent")("background-color", ctx_r1.kidForm.ui_theme === th_r13.value ? th_r13.color + "12" : "var(--muted)");
    \u0275\u0275attribute("data-testid", "theme-" + th_r13.value);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", th_r13.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(th_r13.label);
  }
}
function ParentDashboardPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddKid.set(false));
    });
    \u0275\u0275element(1, "div", 79);
    \u0275\u0275elementStart(2, "div", 80);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_14_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "div", 1)(4, "h2", 81);
    \u0275\u0275text(5, "Add Child");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 82);
    \u0275\u0275listener("click", function ParentDashboardPage_Conditional_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddKid.set(false));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 5);
    \u0275\u0275element(8, "path", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 84);
    \u0275\u0275listener("ngSubmit", function ParentDashboardPage_Conditional_14_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleAddKid());
    });
    \u0275\u0275elementStart(10, "div")(11, "label", 85);
    \u0275\u0275text(12, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDashboardPage_Conditional_14_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kidForm.name, $event) || (ctx_r1.kidForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 87)(15, "div")(16, "label", 85);
    \u0275\u0275text(17, "Age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDashboardPage_Conditional_14_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kidForm.age, $event) || (ctx_r1.kidForm.age = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 85);
    \u0275\u0275text(21, "Grade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDashboardPage_Conditional_14_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kidForm.grade, $event) || (ctx_r1.kidForm.grade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div")(24, "label", 85);
    \u0275\u0275text(25, "Avatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 90);
    \u0275\u0275repeaterCreate(27, ParentDashboardPage_Conditional_14_For_28_Template, 3, 12, "button", 91, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "label", 85);
    \u0275\u0275text(31, "Theme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 92);
    \u0275\u0275repeaterCreate(33, ParentDashboardPage_Conditional_14_For_34_Template, 4, 8, "button", 93, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "label", 85);
    \u0275\u0275text(37, "Kid Login PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDashboardPage_Conditional_14_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kidForm.pin, $event) || (ctx_r1.kidForm.pin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 95);
    \u0275\u0275text(40, "Your child uses this PIN to log in");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "label", 85);
    \u0275\u0275text(43, "Starting Balance (coins)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDashboardPage_Conditional_14_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.kidForm.starting_balance, $event) || (ctx_r1.kidForm.starting_balance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "button", 97);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kidForm.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kidForm.age);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kidForm.grade);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.avatars);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.themeOptions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kidForm.pin);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.kidForm.starting_balance);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.addingKid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addingKid() ? "Adding..." : "Add Child", " ");
  }
}
var ParentDashboardPage = class _ParentDashboardPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showAddKid = signal(false, ...ngDevMode ? [{ debugName: "showAddKid" }] : []);
  addingKid = signal(false, ...ngDevMode ? [{ debugName: "addingKid" }] : []);
  wallets = signal({}, ...ngDevMode ? [{ debugName: "wallets" }] : []);
  selectedDashboard = signal(null, ...ngDevMode ? [{ debugName: "selectedDashboard" }] : []);
  avatars = AVATARS;
  getAvatarColor = getAvatarColor;
  themeOptions = [
    { value: "boy", label: "Adventure", color: "#0EA5E9", desc: "Blue & Teal" },
    { value: "girl", label: "Fantasy", color: "#A78BFA", desc: "Purple & Pink" },
    { value: "neutral", label: "Nature", color: "#34D399", desc: "Green & Blue" }
  ];
  kidForm = { name: "", age: 8, grade: "", avatar: "panda", ui_theme: "neutral", pin: "", starting_balance: 0 };
  ngOnInit() {
    return __async(this, null, function* () {
      this.loading.set(true);
      yield this.loadData();
      this.loading.set(false);
    });
  }
  loadData() {
    return __async(this, null, function* () {
      const kids = this.auth.kids();
      const w = {};
      for (const kid of kids) {
        w[kid.id] = yield this.fs.getWallet(kid.id);
      }
      this.wallets.set(w);
      const selected = this.auth.selectedKid();
      if (selected) {
        this.selectedDashboard.set(yield this.fs.getKidDashboard(selected.id));
      }
    });
  }
  getLevelName(xp) {
    return getLevelForXp(xp).name;
  }
  handleAddKid() {
    return __async(this, null, function* () {
      if (!this.kidForm.name || !this.kidForm.age)
        return;
      this.addingKid.set(true);
      try {
        const user = this.auth.firebaseUser();
        if (!user)
          return;
        yield this.fs.addKid(user.uid, {
          name: this.kidForm.name,
          age: this.kidForm.age,
          grade: this.kidForm.grade,
          avatar: this.kidForm.avatar,
          ui_theme: this.kidForm.ui_theme,
          pin: this.kidForm.pin,
          starting_balance: this.kidForm.starting_balance
        });
        yield this.auth.loadKids();
        yield this.loadData();
        this.showAddKid.set(false);
        this.kidForm = { name: "", age: 8, grade: "", avatar: "panda", ui_theme: "neutral", pin: "", starting_balance: 0 };
      } catch (err) {
        console.error("Failed to add kid:", err);
      } finally {
        this.addingKid.set(false);
      }
    });
  }
  approveTask(taskId) {
    return __async(this, null, function* () {
      yield this.fs.approveTask(taskId);
      yield this.loadData();
    });
  }
  rejectTask(taskId) {
    return __async(this, null, function* () {
      yield this.fs.rejectTask(taskId);
      yield this.loadData();
    });
  }
  static \u0275fac = function ParentDashboardPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentDashboardPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentDashboardPage, selectors: [["app-parent-dashboard"]], decls: 15, vars: 3, consts: [[1, "animate-fade-in"], [1, "flex", "items-center", "justify-between", "mb-6"], ["data-testid", "dashboard-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight"], [1, "text-xs", "mt-0.5", 2, "color", "var(--fg-muted)"], ["data-testid", "add-kid-btn", 1, "btn-primary", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M12 5v14M5 12h14", "stroke-width", "2", "stroke-linecap", "round"], [1, "card", "p-12", "text-center"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "w-16", "h-16", "rounded-2xl", "mx-auto", "mb-4", "flex", "items-center", "justify-center", 2, "background", "linear-gradient(135deg,#0D9488,#14B8A6)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-white"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", "stroke-width", "2"], ["cx", "9", "cy", "7", "r", "4", "stroke-width", "2"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75", "stroke-width", "2"], [1, "text-lg", "font-bold", "font-heading", "mb-2"], [1, "text-sm", "mb-6", 2, "color", "var(--fg-muted)"], [1, "btn-teal", "px-6", 3, "click"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4", "mb-6"], [1, "card", "p-5", "cursor-pointer", "transition-all", "hover:-translate-y-0.5", "group", 3, "border-color", "box-shadow"], [1, "card", "p-5", "cursor-pointer", "transition-all", "hover:-translate-y-0.5", "group", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "w-11", "h-11", "rounded-xl", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-lg", "flex-shrink-0"], [1, "min-w-0"], [1, "font-semibold", "font-heading", "truncate"], [1, "text-xs", 2, "color", "var(--fg-muted)"], [1, "ml-auto", "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0", 3, "background-color"], [1, "h-1.5", "rounded-full", "mb-3", 2, "background-color", "var(--muted)"], [1, "h-full", "rounded-full", "transition-all"], [1, "flex", "items-center", "justify-between", "text-xs"], [2, "color", "var(--fg-muted)"], [1, "font-bold"], [1, "flex", "items-center", "justify-between", "text-xs", "mt-1"], [1, "font-semibold"], [1, "ml-auto", "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "text-white"], ["points", "20 6 9 17 4 12", "stroke-width", "2.5", "stroke-linecap", "round"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-3", "mb-6"], [1, "card", "p-4"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "mb-3", 2, "background-color", "rgba(13,148,136,0.12)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#0D9488"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "3", "stroke-width", "2"], ["d", "M2 10h20", "stroke-width", "2"], [1, "text-[11px]", "mb-0.5", 2, "color", "var(--fg-muted)"], [1, "text-xl", "font-bold", "font-heading"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "mb-3", 2, "background-color", "rgba(16,185,129,0.12)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#10B981"], [1, "text-xl", "font-bold", "font-heading", 2, "color", "#10B981"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "mb-3", 2, "background-color", "rgba(59,130,246,0.12)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#3B82F6"], ["d", "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z", "stroke-width", "2"], ["points", "17 21 17 13 7 13 7 21", "stroke-width", "2"], [1, "text-xl", "font-bold", "font-heading", 2, "color", "#3B82F6"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "mb-3", 2, "background-color", "rgba(245,158,11,0.12)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#F59E0B"], ["cx", "12", "cy", "12", "r", "10", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "6", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "2", "stroke-width", "2"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-4"], [1, "card", "p-5"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-semibold", "font-heading"], [1, "text-xs", "px-2", "py-0.5", "rounded-full", "font-semibold", 2, "background-color", "rgba(245,158,11,0.12)", "color", "#F59E0B"], [1, "space-y-2"], [1, "flex", "items-center", "justify-between", "p-3", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "min-w-0", "mr-3"], [1, "text-sm", "font-medium", "truncate"], [1, "text-[11px]", 2, "color", "var(--fg-muted)"], [1, "flex", "gap-1.5", "flex-shrink-0"], [1, "text-[10px]", "px-2", "py-0.5", "rounded-full", "font-semibold", "flex-shrink-0", 2, "background-color", "rgba(245,158,11,0.15)", "color", "#F59E0B"], [1, "text-xs", "px-2.5", "py-1", "rounded-lg", "bg-emerald-500", "text-white", "font-semibold", 3, "click"], [1, "text-xs", "px-2.5", "py-1", "rounded-lg", "bg-red-400", "text-white", "font-semibold", 3, "click"], [1, "text-sm", "font-semibold", "font-heading", "mb-4"], [1, "flex", "items-center", "gap-3"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["d", "M5 12h14", "stroke-width", "2", "stroke-linecap", "round"], [1, "text-sm", "flex-1", "truncate"], [1, "text-sm", "font-semibold", "flex-shrink-0"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "absolute", "inset-0", "bg-black/50", "backdrop-blur-sm"], [1, "card", "p-6", "w-full", "max-w-md", "relative", "z-10", "max-h-[90vh]", "overflow-y-auto", "animate-scale-in", 3, "click"], ["data-testid", "add-kid-modal-title", 1, "text-base", "font-bold", "font-heading"], [1, "p-1.5", "rounded-lg", 2, "color", "var(--fg-muted)", 3, "click"], ["d", "M18 6L6 18M6 6l12 12", "stroke-width", "2", "stroke-linecap", "round"], [1, "space-y-4", 3, "ngSubmit"], [1, "label"], ["placeholder", "Child's name", "name", "name", "data-testid", "kid-name-input", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "number", "min", "3", "max", "18", "placeholder", "Age", "name", "age", "data-testid", "kid-age-input", 1, "input", 3, "ngModelChange", "ngModel"], ["placeholder", "Optional", "name", "grade", "data-testid", "kid-grade-input", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-4", "gap-2"], ["type", "button", 1, "aspect-square", "rounded-xl", "flex", "items-center", "justify-center", "transition-all", 3, "ring-2", "ring-offset-1", "scale-105", "background-color"], [1, "grid", "grid-cols-3", "gap-2"], ["type", "button", 1, "rounded-xl", "p-3", "text-center", "transition-all", "border-2", 3, "border-color", "background-color"], ["type", "text", "maxlength", "6", "placeholder", "4-6 digit PIN", "name", "pin", "data-testid", "kid-pin-input", 1, "input", "text-center", "tracking-[0.3em]", 3, "ngModelChange", "ngModel"], [1, "text-[11px]", "mt-1", 2, "color", "var(--fg-muted)"], ["type", "number", "min", "0", "placeholder", "0", "name", "starting_balance", "data-testid", "kid-balance-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "submit", "data-testid", "submit-add-kid-btn", 1, "btn-teal", "w-full", "py-3", 3, "disabled"], ["type", "button", 1, "aspect-square", "rounded-xl", "flex", "items-center", "justify-center", "transition-all", 3, "click"], [1, "w-9", "h-9", "rounded-full", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-sm"], ["type", "button", 1, "rounded-xl", "p-3", "text-center", "transition-all", "border-2", 3, "click"], [1, "w-5", "h-5", "rounded-full", "mx-auto", "mb-1"], [1, "text-[11px]", "font-semibold"]], template: function ParentDashboardPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Overview of your children's finances");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ParentDashboardPage_Template_button_click_8_listener() {
        return ctx.showAddKid.set(true);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 5);
      \u0275\u0275element(10, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Add Child ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, ParentDashboardPage_Conditional_12_Template, 12, 0, "div", 7);
      \u0275\u0275conditionalCreate(13, ParentDashboardPage_Conditional_13_Template, 4, 1);
      \u0275\u0275conditionalCreate(14, ParentDashboardPage_Conditional_14_Template, 47, 7, "div", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.auth.kids().length === 0 && !ctx.loading() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.kids().length > 0 ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddKid() ? 14 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, ParentLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentDashboardPage, [{
    type: Component,
    args: [{
      selector: "app-parent-dashboard",
      standalone: true,
      imports: [CommonModule, FormsModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <!-- Page Header -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-2xl font-bold font-heading tracking-tight" data-testid="dashboard-heading">Dashboard</h1>
            <p class="text-xs mt-0.5" style="color:var(--fg-muted)">Overview of your children's finances</p>
          </div>
          <button (click)="showAddKid.set(true)" class="btn-primary" data-testid="add-kid-btn">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
            Add Child
          </button>
        </div>

        <!-- Empty State -->
        @if (auth.kids().length === 0 && !loading()) {
          <div class="card p-12 text-center">
            <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style="background:linear-gradient(135deg,#0D9488,#14B8A6)">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke-width="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke-width="2"/></svg>
            </div>
            <h2 class="text-lg font-bold font-heading mb-2">Add Your First Child</h2>
            <p class="text-sm mb-6" style="color:var(--fg-muted)">Get started by adding a child to manage their virtual finances.</p>
            <button (click)="showAddKid.set(true)" class="btn-teal px-6">Add Child</button>
          </div>
        }

        @if (auth.kids().length > 0) {
          <!-- Kid Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            @for (kid of auth.kids(); track kid.id) {
              <div class="card p-5 cursor-pointer transition-all hover:-translate-y-0.5 group"
                   (click)="auth.selectedKid.set(kid)"
                   [style.border-color]="auth.selectedKid()?.id === kid.id ? getAvatarColor(kid.avatar) : ''"
                   [style.box-shadow]="auth.selectedKid()?.id === kid.id ? '0 0 0 2px ' + getAvatarColor(kid.avatar) + '40' : ''"
                   [attr.data-testid]="'kid-card-' + kid.name">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                       [style.background-color]="getAvatarColor(kid.avatar)">{{ kid.name[0] }}</div>
                  <div class="min-w-0">
                    <h3 class="font-semibold font-heading truncate">{{ kid.name }}</h3>
                    <p class="text-xs" style="color:var(--fg-muted)">Level {{ kid.level }} &middot; {{ getLevelName(kid.xp) }}</p>
                  </div>
                  @if (auth.selectedKid()?.id === kid.id) {
                    <div class="ml-auto w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" [style.background-color]="getAvatarColor(kid.avatar)">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" stroke-width="2.5" stroke-linecap="round"/></svg>
                    </div>
                  }
                </div>
                <!-- XP bar -->
                <div class="h-1.5 rounded-full mb-3" style="background-color:var(--muted)">
                  <div class="h-full rounded-full transition-all" [style.width]="((kid.xp % 100) / 100 * 100) + '%'" [style.background-color]="getAvatarColor(kid.avatar)"></div>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span style="color:var(--fg-muted)">Balance</span>
                  <span class="font-bold">{{ wallets()[kid.id]?.balance || 0 }} coins</span>
                </div>
                <div class="flex items-center justify-between text-xs mt-1">
                  <span style="color:var(--fg-muted)">Credit Score</span>
                  <span class="font-semibold"
                        [style.color]="kid.credit_score >= 700 ? '#10B981' : kid.credit_score >= 400 ? '#F59E0B' : '#EF4444'">
                    {{ kid.credit_score }}
                  </span>
                </div>
              </div>
            }
          </div>

          <!-- Selected Kid Stats -->
          @if (selectedDashboard(); as dash) {
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <div class="card p-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color:rgba(13,148,136,0.12)">
                  <svg class="w-4 h-4" style="color:#0D9488" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="3" stroke-width="2"/><path d="M2 10h20" stroke-width="2"/></svg>
                </div>
                <p class="text-[11px] mb-0.5" style="color:var(--fg-muted)">Balance</p>
                <p class="text-xl font-bold font-heading">{{ dash.wallet.balance }}</p>
              </div>
              <div class="card p-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color:rgba(16,185,129,0.12)">
                  <svg class="w-4 h-4" style="color:#10B981" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <p class="text-[11px] mb-0.5" style="color:var(--fg-muted)">Total Earned</p>
                <p class="text-xl font-bold font-heading" style="color:#10B981">{{ dash.wallet.total_earned }}</p>
              </div>
              <div class="card p-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color:rgba(59,130,246,0.12)">
                  <svg class="w-4 h-4" style="color:#3B82F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke-width="2"/><polyline points="17 21 17 13 7 13 7 21" stroke-width="2"/></svg>
                </div>
                <p class="text-[11px] mb-0.5" style="color:var(--fg-muted)">Total Saved</p>
                <p class="text-xl font-bold font-heading" style="color:#3B82F6">{{ dash.wallet.total_saved }}</p>
              </div>
              <div class="card p-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style="background-color:rgba(245,158,11,0.12)">
                  <svg class="w-4 h-4" style="color:#F59E0B" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>
                </div>
                <p class="text-[11px] mb-0.5" style="color:var(--fg-muted)">Credit Score</p>
                <p class="text-xl font-bold font-heading">{{ dash.kid?.credit_score || 500 }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <!-- Pending Tasks -->
              @if (dash.active_tasks.length > 0) {
                <div class="card p-5">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-semibold font-heading">Pending Tasks</h3>
                    <span class="text-xs px-2 py-0.5 rounded-full font-semibold" style="background-color:rgba(245,158,11,0.12);color:#F59E0B">
                      {{ dash.active_tasks.length }}
                    </span>
                  </div>
                  <div class="space-y-2">
                    @for (task of dash.active_tasks.slice(0, 5); track task.id) {
                      <div class="flex items-center justify-between p-3 rounded-xl" style="background-color:var(--muted)">
                        <div class="min-w-0 mr-3">
                          <p class="text-sm font-medium truncate">{{ task.title }}</p>
                          <p class="text-[11px]" style="color:var(--fg-muted)">{{ task.reward_amount }} coins</p>
                        </div>
                        @if (task.status === 'completed') {
                          <div class="flex gap-1.5 flex-shrink-0">
                            <button (click)="approveTask(task.id)" class="text-xs px-2.5 py-1 rounded-lg bg-emerald-500 text-white font-semibold" [attr.data-testid]="'approve-task-' + task.id">\u2713</button>
                            <button (click)="rejectTask(task.id)" class="text-xs px-2.5 py-1 rounded-lg bg-red-400 text-white font-semibold" [attr.data-testid]="'reject-task-' + task.id">\u2715</button>
                          </div>
                        } @else {
                          <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0" style="background-color:rgba(245,158,11,0.15);color:#F59E0B">Pending</span>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              <!-- Recent Transactions -->
              @if (dash.recent_transactions.length > 0) {
                <div class="card p-5">
                  <h3 class="text-sm font-semibold font-heading mb-4">Recent Transactions</h3>
                  <div class="space-y-2">
                    @for (txn of dash.recent_transactions.slice(0, 5); track txn.id) {
                      <div class="flex items-center gap-3">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                             [style.background-color]="txn.type === 'credit' ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.10)'">
                          <svg class="w-3.5 h-3.5" [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            @if (txn.type === 'credit') {
                              <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/>
                            } @else {
                              <path d="M5 12h14" stroke-width="2" stroke-linecap="round"/>
                            }
                          </svg>
                        </div>
                        <p class="text-sm flex-1 truncate">{{ txn.description }}</p>
                        <span class="text-sm font-semibold flex-shrink-0"
                              [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'">
                          {{ txn.type === 'credit' ? '+' : '-' }}{{ txn.amount }}
                        </span>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>
          }
        }

        <!-- Add Kid Modal -->
        @if (showAddKid()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showAddKid.set(false)">
            <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div class="card p-6 w-full max-w-md relative z-10 max-h-[90vh] overflow-y-auto animate-scale-in" (click)="$event.stopPropagation()">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-base font-bold font-heading" data-testid="add-kid-modal-title">Add Child</h2>
                <button (click)="showAddKid.set(false)" class="p-1.5 rounded-lg" style="color:var(--fg-muted)">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
              </div>
              <form (ngSubmit)="handleAddKid()" class="space-y-4">
                <div>
                  <label class="label">Name</label>
                  <input class="input" placeholder="Child's name" [(ngModel)]="kidForm.name" name="name" data-testid="kid-name-input">
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="label">Age</label>
                    <input class="input" type="number" min="3" max="18" placeholder="Age" [(ngModel)]="kidForm.age" name="age" data-testid="kid-age-input">
                  </div>
                  <div>
                    <label class="label">Grade</label>
                    <input class="input" placeholder="Optional" [(ngModel)]="kidForm.grade" name="grade" data-testid="kid-grade-input">
                  </div>
                </div>
                <div>
                  <label class="label">Avatar</label>
                  <div class="grid grid-cols-4 gap-2">
                    @for (av of avatars; track av.id) {
                      <button type="button" (click)="kidForm.avatar = av.id"
                              [class.ring-2]="kidForm.avatar === av.id"
                              [class.ring-offset-1]="kidForm.avatar === av.id"
                              [class.scale-105]="kidForm.avatar === av.id"
                              class="aspect-square rounded-xl flex items-center justify-center transition-all"
                              [style.background-color]="kidForm.avatar === av.id ? av.color + '20' : 'var(--muted)'"
                              [attr.data-testid]="'avatar-' + av.id">
                        <span class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" [style.background-color]="av.color">{{ av.id[0].toUpperCase() }}</span>
                      </button>
                    }
                  </div>
                </div>
                <div>
                  <label class="label">Theme</label>
                  <div class="grid grid-cols-3 gap-2">
                    @for (th of themeOptions; track th.value) {
                      <button type="button" (click)="kidForm.ui_theme = th.value"
                              class="rounded-xl p-3 text-center transition-all border-2"
                              [style.border-color]="kidForm.ui_theme === th.value ? th.color : 'transparent'"
                              [style.background-color]="kidForm.ui_theme === th.value ? th.color + '12' : 'var(--muted)'"
                              [attr.data-testid]="'theme-' + th.value">
                        <div class="w-5 h-5 rounded-full mx-auto mb-1" [style.background-color]="th.color"></div>
                        <p class="text-[11px] font-semibold">{{ th.label }}</p>
                      </button>
                    }
                  </div>
                </div>
                <div>
                  <label class="label">Kid Login PIN</label>
                  <input class="input text-center tracking-[0.3em]" type="text" maxlength="6" placeholder="4-6 digit PIN" [(ngModel)]="kidForm.pin" name="pin" data-testid="kid-pin-input">
                  <p class="text-[11px] mt-1" style="color:var(--fg-muted)">Your child uses this PIN to log in</p>
                </div>
                <div>
                  <label class="label">Starting Balance (coins)</label>
                  <input class="input" type="number" min="0" placeholder="0" [(ngModel)]="kidForm.starting_balance" name="starting_balance" data-testid="kid-balance-input">
                </div>
                <button type="submit" class="btn-teal w-full py-3" [disabled]="addingKid()" data-testid="submit-add-kid-btn">
                  {{ addingKid() ? 'Adding...' : 'Add Child' }}
                </button>
              </form>
            </div>
          </div>
        }
      </div>
    </app-parent-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentDashboardPage, { className: "ParentDashboardPage", filePath: "src/app/pages/parent-dashboard.ts", lineNumber: 254 });
})();
export {
  ParentDashboardPage
};
//# sourceMappingURL=chunk-DFH6P7FY.js.map
