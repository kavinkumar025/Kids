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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QO3DPW6E.js";
import {
  KID_THEMES,
  LEVELS
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/kid-achievements.ts
var _forTrack0 = ($index, $item) => $item.level;
var _forTrack1 = ($index, $item) => $item.name;
function KidAchievementsPage_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", d_r2.level_info.level >= level_r1.level ? ctx_r2.theme().primary + "15" : "var(--muted)")("opacity", d_r2.level_info.level >= level_r1.level ? "1" : "0.5");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", d_r2.level_info.level >= level_r1.level ? ctx_r2.theme().primary : "var(--fg-muted)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(level_r1.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r1.name);
  }
}
function KidAchievementsPage_Conditional_6_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Complete tasks, read stories, and save to earn badges!");
    \u0275\u0275elementEnd();
  }
}
function KidAchievementsPage_Conditional_6_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 21);
    \u0275\u0275element(3, "circle", 22)(4, "polyline", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const badge_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r2.theme().primary + "10");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.theme().primary + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.theme().primary);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(badge_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badge_r4.desc);
  }
}
function KidAchievementsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h3", 5);
    \u0275\u0275text(2, "Level Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275repeaterCreate(4, KidAchievementsPage_Conditional_6_For_5_Template, 5, 8, "div", 7, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "p", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 11);
    \u0275\u0275text(11, "Total XP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "p", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 11);
    \u0275\u0275text(16, "Credit Score");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "p", 10);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 11);
    \u0275\u0275text(21, "Tasks Done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 9)(23, "p", 10);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 11);
    \u0275\u0275text(26, "Stories Read");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 9)(28, "p", 10);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 11);
    \u0275\u0275text(31, "Goals Done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 9)(33, "p", 10);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 11);
    \u0275\u0275text(36, "SIP Payments");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 12)(38, "h3", 5);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, KidAchievementsPage_Conditional_6_Conditional_40_Template, 2, 0, "p", 13);
    \u0275\u0275elementStart(41, "div", 14);
    \u0275\u0275repeaterCreate(42, KidAchievementsPage_Conditional_6_For_43_Template, 9, 8, "div", 15, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r2.theme().primary + "30");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.levels);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r2.theme().primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.xp);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", ctx_r2.creditColor(d_r2.credit_score));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2.credit_score);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.stats.tasks_completed);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.stats.stories_read);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.stats.goals_achieved);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.stats.sip_payments);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Badges Earned (", d_r2.badges.length, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r2.badges.length === 0 ? 40 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(d_r2.badges);
  }
}
function KidAchievementsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r2.theme().primary);
  }
}
var KidAchievementsPage = class _KidAchievementsPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : []);
  levels = LEVELS;
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || "neutral"] || KID_THEMES["neutral"], ...ngDevMode ? [{ debugName: "theme" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (kid)
        this.data.set(yield this.fs.getKidAchievements(kid.id));
    });
  }
  creditColor(score) {
    return score >= 700 ? "#34D399" : score >= 400 ? "#FCD34D" : "#F87171";
  }
  static \u0275fac = function KidAchievementsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidAchievementsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidAchievementsPage, selectors: [["app-kid-achievements"]], decls: 8, vars: 1, consts: [[1, "animate-fade-in"], ["data-testid", "kid-achievements-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-6", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-center", "h-64"], [1, "card", "p-6", "mb-6"], [1, "text-sm", "font-semibold", "font-heading", "mb-4"], [1, "grid", "grid-cols-5", "gap-2"], [1, "text-center", "p-2", "rounded-xl", "transition-all", 3, "background-color", "opacity"], [1, "grid", "grid-cols-2", "lg:grid-cols-3", "gap-3", "mb-6"], [1, "card", "p-4", "text-center"], [1, "text-xl", "font-bold", "font-heading"], [1, "text-[10px]", 2, "color", "var(--fg-muted)"], [1, "card", "p-6"], [1, "text-sm", "text-center", "py-6", 2, "color", "var(--fg-muted)"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-3"], [1, "text-center", "p-4", "rounded-2xl", 3, "background-color"], [1, "text-center", "p-2", "rounded-xl", "transition-all"], [1, "text-lg", "font-bold"], [1, "text-[8px]", "truncate", 2, "color", "var(--fg-muted)"], [1, "text-center", "p-4", "rounded-2xl"], [1, "w-12", "h-12", "rounded-full", "mx-auto", "mb-2", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["cx", "12", "cy", "8", "r", "7", "stroke-width", "2"], ["points", "8.21 13.89 7 23 12 20 17 23 15.79 13.88", "stroke-width", "2"], [1, "text-xs", "font-bold"], [1, "w-8", "h-8", "border-2", "border-t-transparent", "rounded-full", "animate-spin"]], template: function KidAchievementsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-kid-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "Achievements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Your badges and progress");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, KidAchievementsPage_Conditional_6_Template, 44, 14)(7, KidAchievementsPage_Conditional_7_Template, 2, 2, "div", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional((tmp_0_0 = ctx.data()) ? 6 : 7, tmp_0_0);
    }
  }, dependencies: [CommonModule, KidLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidAchievementsPage, [{
    type: Component,
    args: [{
      selector: "app-kid-achievements",
      standalone: true,
      imports: [CommonModule, KidLayoutComponent],
      template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="kid-achievements-heading">Achievements</h1>
        <p class="text-sm mb-6" style="color: var(--fg-muted)">Your badges and progress</p>

        @if (data(); as d) {
          <!-- Level Progress -->
          <div class="card p-6 mb-6" [style.border-color]="theme().primary + '30'">
            <h3 class="text-sm font-semibold font-heading mb-4">Level Progress</h3>
            <div class="grid grid-cols-5 gap-2">
              @for (level of levels; track level.level) {
                <div class="text-center p-2 rounded-xl transition-all"
                     [style.background-color]="d.level_info.level >= level.level ? theme().primary + '15' : 'var(--muted)'"
                     [style.opacity]="d.level_info.level >= level.level ? '1' : '0.5'">
                  <p class="text-lg font-bold" [style.color]="d.level_info.level >= level.level ? theme().primary : 'var(--fg-muted)'">{{ level.level }}</p>
                  <p class="text-[8px] truncate" style="color: var(--fg-muted)">{{ level.name }}</p>
                </div>
              }
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            <div class="card p-4 text-center"><p class="text-xl font-bold font-heading" [style.color]="theme().primary">{{ d.xp }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Total XP</p></div>
            <div class="card p-4 text-center"><p class="text-xl font-bold font-heading" [style.color]="creditColor(d.credit_score)">{{ d.credit_score }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Credit Score</p></div>
            <div class="card p-4 text-center"><p class="text-xl font-bold font-heading">{{ d.stats.tasks_completed }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Tasks Done</p></div>
            <div class="card p-4 text-center"><p class="text-xl font-bold font-heading">{{ d.stats.stories_read }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Stories Read</p></div>
            <div class="card p-4 text-center"><p class="text-xl font-bold font-heading">{{ d.stats.goals_achieved }}</p><p class="text-[10px]" style="color: var(--fg-muted)">Goals Done</p></div>
            <div class="card p-4 text-center"><p class="text-xl font-bold font-heading">{{ d.stats.sip_payments }}</p><p class="text-[10px]" style="color: var(--fg-muted)">SIP Payments</p></div>
          </div>

          <!-- Badges -->
          <div class="card p-6">
            <h3 class="text-sm font-semibold font-heading mb-4">Badges Earned ({{ d.badges.length }})</h3>
            @if (d.badges.length === 0) {
              <p class="text-sm text-center py-6" style="color: var(--fg-muted)">Complete tasks, read stories, and save to earn badges!</p>
            }
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              @for (badge of d.badges; track badge.name) {
                <div class="text-center p-4 rounded-2xl" [style.background-color]="theme().primary + '10'">
                  <div class="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center" [style.background-color]="theme().primary + '20'">
                    <svg class="w-6 h-6" [style.color]="theme().primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7" stroke-width="2"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke-width="2"/></svg>
                  </div>
                  <p class="text-xs font-bold">{{ badge.name }}</p>
                  <p class="text-[10px]" style="color: var(--fg-muted)">{{ badge.desc }}</p>
                </div>
              }
            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidAchievementsPage, { className: "KidAchievementsPage", filePath: "src/app/pages/kid-achievements.ts", lineNumber: 71 });
})();
export {
  KidAchievementsPage
};
//# sourceMappingURL=chunk-O6R3IT6N.js.map
