import {
  KidLayoutComponent
} from "./chunk-IEXVWZPQ.js";
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
  DecimalPipe,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QO3DPW6E.js";
import {
  KID_THEMES
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/kid-home.ts
var _forTrack0 = ($index, $item) => $item.id;
function KidHomePage_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", (d_r1.kid == null ? null : d_r1.kid.xp) || 0, " / ", d_r1.next_level.xp_required, " XP");
  }
}
function KidHomePage_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.xpProgress(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(4, 4, 100 - ctx_r1.xpProgress(), "1.0-0"), "% to Level ", d_r1.next_level.level);
  }
}
function KidHomePage_Conditional_2_Conditional_53_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275element(3, "polyline", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 40)(5, "p", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.theme().primary + "18");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.theme().primary);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(task_r3.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.theme().primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", task_r3.reward_amount, " coins");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.theme().primary + "15")("color", ctx_r1.theme().primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r3.status, " ");
  }
}
function KidHomePage_Conditional_2_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 33)(2, "h3", 34);
    \u0275\u0275text(3, "My Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 35);
    \u0275\u0275text(5, "View All \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275repeaterCreate(7, KidHomePage_Conditional_2_Conditional_53_For_8_Template, 11, 13, "div", 37, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.theme().primary);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(d_r1.active_tasks.slice(0, 3));
  }
}
function KidHomePage_Conditional_2_Conditional_54_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 19);
  }
}
function KidHomePage_Conditional_2_Conditional_54_For_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 46);
  }
}
function KidHomePage_Conditional_2_Conditional_54_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 39);
    \u0275\u0275conditionalCreate(3, KidHomePage_Conditional_2_Conditional_54_For_8_Conditional_3_Template, 1, 0, ":svg:path", 19)(4, KidHomePage_Conditional_2_Conditional_54_For_8_Conditional_4_Template, 1, 0, ":svg:path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", txn_r4.type === "credit" ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.10)");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", txn_r4.type === "credit" ? "#10B981" : "#EF4444");
    \u0275\u0275advance();
    \u0275\u0275conditional(txn_r4.type === "credit" ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r4.description);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", txn_r4.type === "credit" ? "#10B981" : "#EF4444");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r4.type === "credit" ? "+" : "-", "", txn_r4.amount, " ");
  }
}
function KidHomePage_Conditional_2_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 33)(2, "h3", 34);
    \u0275\u0275text(3, "Recent Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 44);
    \u0275\u0275text(5, "View All \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275repeaterCreate(7, KidHomePage_Conditional_2_Conditional_54_For_8_Template, 9, 10, "div", 45, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.theme().primary);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(d_r1.recent_transactions.slice(0, 5));
  }
}
function KidHomePage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "div")(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, KidHomePage_Conditional_2_Conditional_8_Template, 2, 2, "p", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "p", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13, "coins");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, KidHomePage_Conditional_2_Conditional_14_Template, 5, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 14);
    \u0275\u0275element(19, "polyline", 15)(20, "path", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "p", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 18);
    \u0275\u0275text(24, "Tasks Done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 12)(26, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 14);
    \u0275\u0275element(28, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "p", 17);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 18);
    \u0275\u0275text(32, "Total Earned");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 12)(34, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 21);
    \u0275\u0275element(36, "path", 22)(37, "polyline", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "p", 24);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 18);
    \u0275\u0275text(41, "Total Saved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 12)(43, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 14);
    \u0275\u0275element(45, "circle", 25)(46, "circle", 26)(47, "circle", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "p", 17);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 18);
    \u0275\u0275text(51, "Credit Score");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 28);
    \u0275\u0275conditionalCreate(53, KidHomePage_Conditional_2_Conditional_53_Template, 9, 2, "div", 29);
    \u0275\u0275conditionalCreate(54, KidHomePage_Conditional_2_Conditional_54_Template, 9, 2, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx_r1.theme().primary + "," + ctx_r1.theme().secondary + ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Level ", d_r1.level_info.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.level_info.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.next_level ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((d_r1.wallet == null ? null : d_r1.wallet.balance) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(d_r1.next_level ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r1.theme().primary + "18");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.theme().primary);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.theme().primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.stats.total_tasks_completed);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", ctx_r1.theme().secondary + "18");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.theme().secondary);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.theme().secondary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((d_r1.wallet == null ? null : d_r1.wallet.total_earned) || 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((d_r1.wallet == null ? null : d_r1.wallet.total_saved) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background-color", ctx_r1.creditColor() + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.creditColor());
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r1.creditColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((d_r1.kid == null ? null : d_r1.kid.credit_score) || 500);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(d_r1.active_tasks.length > 0 ? 53 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r1.recent_transactions.length > 0 ? 54 : -1);
  }
}
function KidHomePage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r1.theme().primary);
  }
}
var KidHomePage = class _KidHomePage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  dashboard = signal(null, ...ngDevMode ? [{ debugName: "dashboard" }] : []);
  theme = computed(() => {
    const t = this.auth.kidSession()?.kid?.ui_theme || "neutral";
    return KID_THEMES[t] || KID_THEMES["neutral"];
  }, ...ngDevMode ? [{ debugName: "theme" }] : []);
  xpProgress = computed(() => {
    const d = this.dashboard();
    if (!d?.next_level || !d?.kid)
      return 100;
    const currentLevelXp = d.level_info.xp_required;
    const nextLevelXp = d.next_level.xp_required;
    return (d.kid.xp - currentLevelXp) / (nextLevelXp - currentLevelXp) * 100;
  }, ...ngDevMode ? [{ debugName: "xpProgress" }] : []);
  creditColor = computed(() => {
    const score = this.dashboard()?.kid?.credit_score || 500;
    return score >= 700 ? "#34D399" : score >= 400 ? "#FCD34D" : "#F87171";
  }, ...ngDevMode ? [{ debugName: "creditColor" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (kid)
        this.dashboard.set(yield this.fs.getKidDashboard(kid.id));
    });
  }
  static \u0275fac = function KidHomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidHomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidHomePage, selectors: [["app-kid-home"]], decls: 4, vars: 1, consts: [[1, "animate-fade-in"], [1, "flex", "items-center", "justify-center", "h-64"], [1, "rounded-2xl", "p-5", "mb-5", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "opacity-10", 2, "background-image", "radial-gradient(circle at 80% 20%, white 0%, transparent 60%)"], [1, "relative", "flex", "items-start", "justify-between"], [1, "text-white/70", "text-xs", "font-medium", "mb-0.5"], [1, "text-2xl", "font-bold", "text-white", "font-heading", "leading-tight"], [1, "text-white/60", "text-[11px]", "mt-1"], [1, "text-right"], [1, "text-4xl", "font-bold", "text-white", "font-heading", "leading-tight"], [1, "text-white/60", "text-xs", "font-medium"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-3", "mb-5"], [1, "card", "p-4"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "mb-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["points", "9 11 12 14 22 4", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11", "stroke-width", "2"], [1, "text-xl", "font-bold", "font-heading"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], ["d", "M12 5v14M5 12h14", "stroke-width", "2", "stroke-linecap", "round"], [1, "w-8", "h-8", "rounded-lg", "flex", "items-center", "justify-center", "mb-2", 2, "background-color", "rgba(59,130,246,0.12)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", 2, "color", "#3B82F6"], ["d", "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z", "stroke-width", "2"], ["points", "17 21 17 13 7 13 7 21", "stroke-width", "2"], [1, "text-xl", "font-bold", "font-heading", 2, "color", "#3B82F6"], ["cx", "12", "cy", "12", "r", "10", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "6", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "2", "stroke-width", "2"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-4"], [1, "card", "p-5"], [1, "mt-4", "h-2", "rounded-full", 2, "background-color", "rgba(255,255,255,0.25)"], [1, "h-2", "rounded-full", "transition-all", "duration-700", 2, "background-color", "rgba(255,255,255,0.85)"], [1, "text-white/50", "text-[10px]", "mt-1"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-sm", "font-semibold", "font-heading"], ["routerLink", "/kid/tasks", 1, "text-xs", "font-medium"], [1, "space-y-2"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "w-7", "h-7", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "truncate"], [1, "text-[11px]"], [1, "text-[10px]", "px-2", "py-0.5", "rounded-full", "font-semibold", "flex-shrink-0"], ["routerLink", "/kid/wallet", 1, "text-xs", "font-medium"], [1, "flex", "items-center", "gap-3"], ["d", "M5 12h14", "stroke-width", "2", "stroke-linecap", "round"], [1, "text-xs", "flex-1", "truncate"], [1, "text-xs", "font-semibold", "flex-shrink-0"], [1, "w-8", "h-8", "border-2", "border-t-transparent", "rounded-full", "animate-spin"]], template: function KidHomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-kid-layout")(1, "div", 0);
      \u0275\u0275conditionalCreate(2, KidHomePage_Conditional_2_Template, 55, 31)(3, KidHomePage_Conditional_3_Template, 2, 2, "div", 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_0_0 = ctx.dashboard()) ? 2 : 3, tmp_0_0);
    }
  }, dependencies: [CommonModule, RouterLink, KidLayoutComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidHomePage, [{
    type: Component,
    args: [{
      selector: "app-kid-home",
      standalone: true,
      imports: [CommonModule, RouterLink, KidLayoutComponent],
      template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        @if (dashboard(); as d) {
          <!-- Hero: Level + Wallet -->
          <div class="rounded-2xl p-5 mb-5 relative overflow-hidden"
               [style.background]="'linear-gradient(135deg,' + theme().primary + ',' + theme().secondary + ')'">
            <div class="absolute inset-0 opacity-10" style="background-image:radial-gradient(circle at 80% 20%, white 0%, transparent 60%)"></div>
            <div class="relative flex items-start justify-between">
              <div>
                <p class="text-white/70 text-xs font-medium mb-0.5">Level {{ d.level_info.level }}</p>
                <h2 class="text-2xl font-bold text-white font-heading leading-tight">{{ d.level_info.name }}</h2>
                @if (d.next_level) {
                  <p class="text-white/60 text-[11px] mt-1">{{ d.kid?.xp || 0 }} / {{ d.next_level.xp_required }} XP</p>
                }
              </div>
              <div class="text-right">
                <p class="text-4xl font-bold text-white font-heading leading-tight">{{ d.wallet?.balance || 0 }}</p>
                <p class="text-white/60 text-xs font-medium">coins</p>
              </div>
            </div>
            @if (d.next_level) {
              <div class="mt-4 h-2 rounded-full" style="background-color:rgba(255,255,255,0.25)">
                <div class="h-2 rounded-full transition-all duration-700" [style.width.%]="xpProgress()" style="background-color:rgba(255,255,255,0.85)"></div>
              </div>
              <p class="text-white/50 text-[10px] mt-1">{{ 100 - xpProgress() | number:'1.0-0' }}% to Level {{ d.next_level.level }}</p>
            }
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <div class="card p-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2" [style.background-color]="theme().primary + '18'">
                <svg class="w-4 h-4" [style.color]="theme().primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-width="2"/></svg>
              </div>
              <p class="text-xl font-bold font-heading" [style.color]="theme().primary">{{ d.stats.total_tasks_completed }}</p>
              <p class="text-[10px]" style="color:var(--fg-muted)">Tasks Done</p>
            </div>
            <div class="card p-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2" [style.background-color]="theme().secondary + '18'">
                <svg class="w-4 h-4" [style.color]="theme().secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <p class="text-xl font-bold font-heading" [style.color]="theme().secondary">{{ d.wallet?.total_earned || 0 }}</p>
              <p class="text-[10px]" style="color:var(--fg-muted)">Total Earned</p>
            </div>
            <div class="card p-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style="background-color:rgba(59,130,246,0.12)">
                <svg class="w-4 h-4" style="color:#3B82F6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke-width="2"/><polyline points="17 21 17 13 7 13 7 21" stroke-width="2"/></svg>
              </div>
              <p class="text-xl font-bold font-heading" style="color:#3B82F6">{{ d.wallet?.total_saved || 0 }}</p>
              <p class="text-[10px]" style="color:var(--fg-muted)">Total Saved</p>
            </div>
            <div class="card p-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2" [style.background-color]="creditColor() + '20'">
                <svg class="w-4 h-4" [style.color]="creditColor()" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="6" stroke-width="2"/><circle cx="12" cy="12" r="2" stroke-width="2"/></svg>
              </div>
              <p class="text-xl font-bold font-heading" [style.color]="creditColor()">{{ d.kid?.credit_score || 500 }}</p>
              <p class="text-[10px]" style="color:var(--fg-muted)">Credit Score</p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Active Tasks -->
            @if (d.active_tasks.length > 0) {
              <div class="card p-5">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-sm font-semibold font-heading">My Tasks</h3>
                  <a routerLink="/kid/tasks" class="text-xs font-medium" [style.color]="theme().primary">View All \u2192</a>
                </div>
                <div class="space-y-2">
                  @for (task of d.active_tasks.slice(0, 3); track task.id) {
                    <div class="flex items-center gap-3 p-3 rounded-xl" style="background-color:var(--muted)">
                      <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" [style.background-color]="theme().primary + '18'">
                        <svg class="w-3.5 h-3.5" [style.color]="theme().primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round"/></svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium truncate">{{ task.title }}</p>
                        <p class="text-[11px]" [style.color]="theme().primary">+{{ task.reward_amount }} coins</p>
                      </div>
                      <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                            [style.background-color]="theme().primary + '15'" [style.color]="theme().primary">
                        {{ task.status }}
                      </span>
                    </div>
                  }
                </div>
              </div>
            }

            <!-- Recent Activity -->
            @if (d.recent_transactions.length > 0) {
              <div class="card p-5">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-sm font-semibold font-heading">Recent Activity</h3>
                  <a routerLink="/kid/wallet" class="text-xs font-medium" [style.color]="theme().primary">View All \u2192</a>
                </div>
                <div class="space-y-2">
                  @for (txn of d.recent_transactions.slice(0, 5); track txn.id) {
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
                      <p class="text-xs flex-1 truncate">{{ txn.description }}</p>
                      <span class="text-xs font-semibold flex-shrink-0"
                            [style.color]="txn.type === 'credit' ? '#10B981' : '#EF4444'">
                        {{ txn.type === 'credit' ? '+' : '-' }}{{ txn.amount }}
                      </span>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        } @else {
          <div class="flex items-center justify-center h-64">
            <div class="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" [style.border-color]="theme().primary"></div>
          </div>
        }
      </div>
    </app-kid-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidHomePage, { className: "KidHomePage", filePath: "src/app/pages/kid-home.ts", lineNumber: 142 });
})();
export {
  KidHomePage
};
//# sourceMappingURL=chunk-IXB5OVRS.js.map
