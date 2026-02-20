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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate1
} from "./chunk-QO3DPW6E.js";
import {
  KID_THEMES
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/kid-tasks.ts
var _forTrack0 = ($index, $item) => $item.id;
function KidTasksPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "p", 6);
    \u0275\u0275text(2, "No tasks assigned yet. Ask your parent to create some!");
    \u0275\u0275elementEnd()();
  }
}
function KidTasksPage_For_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function KidTasksPage_For_9_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const task_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.completeTask(task_r2.id));
    });
    \u0275\u0275text(1, "Done!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r2.theme().primary);
    \u0275\u0275attribute("data-testid", "complete-task-" + task_r2.id);
  }
}
function KidTasksPage_For_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Waiting Approval");
    \u0275\u0275elementEnd();
  }
}
function KidTasksPage_For_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Approved");
    \u0275\u0275elementEnd();
  }
}
function KidTasksPage_For_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Rejected");
    \u0275\u0275elementEnd();
  }
}
function KidTasksPage_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7)(2, "div")(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275conditionalCreate(10, KidTasksPage_For_9_Conditional_10_Template, 2, 3, "button", 11)(11, KidTasksPage_For_9_Conditional_11_Template, 2, 0, "span", 12)(12, KidTasksPage_For_9_Conditional_12_Template, 2, 0, "span", 13)(13, KidTasksPage_For_9_Conditional_13_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "kid-task-" + task_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(task_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.description || "Complete this task");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.theme().primary);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", task_r2.reward_amount, " coins");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r2.status === "pending" ? 10 : task_r2.status === "completed" ? 11 : task_r2.status === "approved" ? 12 : 13);
  }
}
var KidTasksPage = class _KidTasksPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  tasks = signal([], ...ngDevMode ? [{ debugName: "tasks" }] : []);
  theme = computed(() => KID_THEMES[this.auth.kidSession()?.kid?.ui_theme || "neutral"] || KID_THEMES["neutral"], ...ngDevMode ? [{ debugName: "theme" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (kid)
        this.tasks.set(yield this.fs.getTasks(kid.id));
    });
  }
  completeTask(id) {
    return __async(this, null, function* () {
      const kid = this.auth.kidSession()?.kid;
      if (!kid)
        return;
      yield this.fs.completeTask(id, kid.id);
      this.tasks.set(yield this.fs.getTasks(kid.id));
    });
  }
  static \u0275fac = function KidTasksPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KidTasksPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidTasksPage, selectors: [["app-kid-tasks"]], decls: 10, vars: 1, consts: [[1, "animate-fade-in"], ["data-testid", "kid-tasks-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-6", 2, "color", "var(--fg-muted)"], [1, "card", "p-12", "text-center"], [1, "space-y-3"], [1, "card", "p-5"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "flex", "items-center", "justify-between"], [1, "font-semibold", "text-sm"], [1, "text-xs", "mt-1", 2, "color", "var(--fg-muted)"], [1, "text-xs", "mt-1", "font-bold"], [1, "text-xs", "px-4", "py-2", "rounded-full", "text-white", "font-medium", 3, "background-color"], [1, "badge", "text-[10px]", 2, "background-color", "#4F7DF320", "color", "#4F7DF3"], [1, "badge", "text-[10px]", 2, "background-color", "#34D39920", "color", "#34D399"], [1, "badge", "text-[10px]", 2, "background-color", "#F8717120", "color", "#F87171"], [1, "text-xs", "px-4", "py-2", "rounded-full", "text-white", "font-medium", 3, "click"]], template: function KidTasksPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-kid-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "My Tasks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Complete tasks to earn coins!");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, KidTasksPage_Conditional_6_Template, 3, 0, "div", 3);
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275repeaterCreate(8, KidTasksPage_For_9_Template, 14, 7, "div", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.tasks().length === 0 ? 6 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tasks());
    }
  }, dependencies: [CommonModule, KidLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KidTasksPage, [{
    type: Component,
    args: [{
      selector: "app-kid-tasks",
      standalone: true,
      imports: [CommonModule, KidLayoutComponent],
      template: `
    <app-kid-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="kid-tasks-heading">My Tasks</h1>
        <p class="text-sm mb-6" style="color: var(--fg-muted)">Complete tasks to earn coins!</p>

        @if (tasks().length === 0) {
          <div class="card p-12 text-center"><p class="text-sm" style="color: var(--fg-muted)">No tasks assigned yet. Ask your parent to create some!</p></div>
        }

        <div class="space-y-3">
          @for (task of tasks(); track task.id) {
            <div class="card p-5" [attr.data-testid]="'kid-task-' + task.id">
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-semibold text-sm">{{ task.title }}</p>
                  <p class="text-xs mt-1" style="color: var(--fg-muted)">{{ task.description || 'Complete this task' }}</p>
                  <p class="text-xs mt-1 font-bold" [style.color]="theme().primary">+{{ task.reward_amount }} coins</p>
                </div>
                <div>
                  @if (task.status === 'pending') {
                    <button (click)="completeTask(task.id)" class="text-xs px-4 py-2 rounded-full text-white font-medium" [style.background-color]="theme().primary" [attr.data-testid]="'complete-task-' + task.id">Done!</button>
                  } @else if (task.status === 'completed') {
                    <span class="badge text-[10px]" style="background-color: #4F7DF320; color: #4F7DF3">Waiting Approval</span>
                  } @else if (task.status === 'approved') {
                    <span class="badge text-[10px]" style="background-color: #34D39920; color: #34D399">Approved</span>
                  } @else {
                    <span class="badge text-[10px]" style="background-color: #F8717120; color: #F87171">Rejected</span>
                  }
                </div>
              </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidTasksPage, { className: "KidTasksPage", filePath: "src/app/pages/kid-tasks.ts", lineNumber: 51 });
})();
export {
  KidTasksPage
};
//# sourceMappingURL=chunk-ANAIHVUD.js.map
