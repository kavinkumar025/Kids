import {
  KidLayoutComponent
} from "./chunk-IEXVWZPQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-VL7AD74M.js";
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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QO3DPW6E.js";
import {
  KID_THEMES
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/kid-goals.ts
var _forTrack0 = ($index, $item) => $item.id;
function KidGoalsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 6);
    \u0275\u0275text(2, "No goals yet. Ask your parent to set one up!");
    \u0275\u0275elementEnd()();
  }
}
function KidGoalsPage_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function KidGoalsPage_For_9_Conditional_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const goal_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.amounts[goal_r2.id], $event) || (ctx_r2.amounts[goal_r2.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function KidGoalsPage_For_9_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const goal_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.contribute(goal_r2.id));
    });
    \u0275\u0275text(3, "Save");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const goal_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.amounts[goal_r2.id]);
    \u0275\u0275attribute("data-testid", "kid-contribute-input-" + goal_r2.id);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.theme().primary);
    \u0275\u0275attribute("data-testid", "kid-contribute-btn-" + goal_r2.id);
  }
}
function KidGoalsPage_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Completed!");
    \u0275\u0275elementEnd();
  }
}
function KidGoalsPage_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275element(4, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, KidGoalsPage_For_9_Conditional_7_Template, 4, 5, "div", 11)(8, KidGoalsPage_For_9_Conditional_8_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const goal_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "kid-goal-" + goal_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(goal_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", goal_r2.saved_amount / goal_r2.target_amount * 100, "%")("background-color", ctx_r2.theme().primary);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", goal_r2.saved_amount, " / ", goal_r2.target_amount, " coins");
    \u0275\u0275advance();
    \u0275\u0275conditional(goal_r2.status === "active" ? 7 : 8);
  }
}
var KidGoalsPage = class _KidGoalsPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  goals = signal([], ...ngDevMode ? [{ debugName: "goals" }] : []);
  amounts = {};
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || "neutral"] || KID_THEMES["neutral"], ...ngDevMode ? [{ debugName: "theme" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (kid)
        this.goals.set(yield this.fs.getGoals(kid.id));
    });
  }
  contribute(goalId) {
    return __async(this, null, function* () {
      const amount = this.amounts[goalId];
      if (!amount || amount <= 0)
        return;
      const kid = this.auth.kidSession()?.kid;
      if (!kid)
        return;
      try {
        yield this.fs.contributeToGoal(goalId, kid.id, amount);
        this.amounts[goalId] = 0;
        this.goals.set(yield this.fs.getGoals(kid.id));
      } catch (e) {
        alert(e.message);
      }
    });
  }
  static \u0275fac = function KidGoalsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidGoalsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidGoalsPage, selectors: [["app-kid-goals"]], decls: 10, vars: 1, consts: [[1, "animate-fade-in"], ["data-testid", "kid-goals-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-6", 2, "color", "var(--fg-muted)"], [1, "card", "p-12", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "p-6"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "font-semibold", "font-heading", "mb-3"], [1, "w-full", "rounded-full", "h-3", "mb-2", 2, "background-color", "var(--muted)"], [1, "h-3", "rounded-full", "transition-all"], [1, "text-xs", "mb-3", 2, "color", "var(--fg-muted)"], [1, "flex", "gap-2"], [1, "badge", "text-[10px]", 2, "background-color", "#34D39920", "color", "#34D399"], ["type", "number", "min", "1", "placeholder", "Amount", 1, "input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "text-xs", "px-4", "py-2", "rounded-full", "text-white", "font-medium", 3, "click"]], template: function KidGoalsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-kid-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "My Goals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Save towards your dreams!");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, KidGoalsPage_Conditional_6_Template, 3, 0, "div", 3);
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275repeaterCreate(8, KidGoalsPage_For_9_Template, 9, 9, "div", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.goals().length === 0 ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.goals());
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, KidLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidGoalsPage, [{
    type: Component,
    args: [{
      selector: "app-kid-goals",
      standalone: true,
      imports: [CommonModule, FormsModule, KidLayoutComponent],
      template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="kid-goals-heading">My Goals</h1>
        <p class="text-sm mb-6" style="color: var(--fg-muted)">Save towards your dreams!</p>

        @if (goals().length === 0) {
          <div class="card p-12 text-center"><p class="text-sm" style="color: var(--fg-muted)">No goals yet. Ask your parent to set one up!</p></div>
        }

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (goal of goals(); track goal.id) {
            <div class="card p-6" [attr.data-testid]="'kid-goal-' + goal.id">
              <h3 class="font-semibold font-heading mb-3">{{ goal.title }}</h3>
              <div class="w-full rounded-full h-3 mb-2" style="background-color: var(--muted)">
                <div class="h-3 rounded-full transition-all" [style.width.%]="(goal.saved_amount / goal.target_amount) * 100" [style.background-color]="theme().primary"></div>
              </div>
              <p class="text-xs mb-3" style="color: var(--fg-muted)">{{ goal.saved_amount }} / {{ goal.target_amount }} coins</p>
              @if (goal.status === 'active') {
                <div class="flex gap-2">
                  <input class="input flex-1" type="number" min="1" placeholder="Amount" [(ngModel)]="amounts[goal.id]" [attr.data-testid]="'kid-contribute-input-' + goal.id">
                  <button (click)="contribute(goal.id)" class="text-xs px-4 py-2 rounded-full text-white font-medium" [style.background-color]="theme().primary" [attr.data-testid]="'kid-contribute-btn-' + goal.id">Save</button>
                </div>
              } @else {
                <span class="badge text-[10px]" style="background-color: #34D39920; color: #34D399">Completed!</span>
              }
            </div>
          }
        </div>
      </div>
    </app-kid-layout>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidGoalsPage, { className: "KidGoalsPage", filePath: "src/app/pages/kid-goals.ts", lineNumber: 47 });
})();
export {
  KidGoalsPage
};
//# sourceMappingURL=chunk-3HPJ65ZC.js.map
