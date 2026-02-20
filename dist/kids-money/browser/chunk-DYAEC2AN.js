import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  NgClass,
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
import "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/parent-tasks.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function ParentTasksPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 7);
    \u0275\u0275text(2, "Please add a child first from the Dashboard.");
    \u0275\u0275elementEnd()();
  }
}
function ParentTasksPage_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ParentTasksPage_Conditional_11_For_2_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.filter.set(f_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r2.filter() !== f_r2.value ? "var(--border)" : "");
    \u0275\u0275property("ngClass", ctx_r2.filter() === f_r2.value ? "btn-primary text-xs px-4 py-2" : "text-xs px-4 py-2 rounded-full border");
    \u0275\u0275attribute("data-testid", "filter-" + f_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function ParentTasksPage_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p", 7);
    \u0275\u0275text(2, "No tasks yet. Create one to get started!");
    \u0275\u0275elementEnd()();
  }
}
function ParentTasksPage_Conditional_11_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ParentTasksPage_Conditional_11_For_6_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const task_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.approve(task_r5.id));
    });
    \u0275\u0275text(1, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 19);
    \u0275\u0275listener("click", function ParentTasksPage_Conditional_11_For_6_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const task_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reject(task_r5.id));
    });
    \u0275\u0275text(3, "Reject");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-testid", "approve-" + task_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-testid", "reject-" + task_r5.id);
  }
}
function ParentTasksPage_Conditional_11_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div")(2, "div", 13)(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 17);
    \u0275\u0275conditionalCreate(10, ParentTasksPage_Conditional_11_For_6_Conditional_10_Template, 4, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-testid", "task-" + task_r5.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(task_r5.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.statusColor(task_r5.status) + "15")("color", ctx_r2.statusColor(task_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", task_r5.reward_amount, " coins \xB7 ", task_r5.frequency);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r5.status === "completed" ? 10 : -1);
  }
}
function ParentTasksPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ParentTasksPage_Conditional_11_For_2_Template, 2, 5, "button", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParentTasksPage_Conditional_11_Conditional_3_Template, 3, 0, "div", 5);
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275repeaterCreate(5, ParentTasksPage_Conditional_11_For_6_Template, 11, 10, "div", 11, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filters);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.filteredTasks().length === 0 ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.filteredTasks());
  }
}
function ParentTasksPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function ParentTasksPage_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreate.set(false));
    });
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275listener("click", function ParentTasksPage_Conditional_12_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "h2", 23);
    \u0275\u0275text(4, "Create Task");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 24);
    \u0275\u0275listener("ngSubmit", function ParentTasksPage_Conditional_12_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createTask());
    });
    \u0275\u0275elementStart(6, "div")(7, "label", 25);
    \u0275\u0275text(8, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ParentTasksPage_Conditional_12_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskForm.title, $event) || (ctx_r2.taskForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 25);
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ParentTasksPage_Conditional_12_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskForm.description, $event) || (ctx_r2.taskForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 28)(15, "div")(16, "label", 25);
    \u0275\u0275text(17, "Reward (coins)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ParentTasksPage_Conditional_12_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskForm.reward_amount, $event) || (ctx_r2.taskForm.reward_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "label", 25);
    \u0275\u0275text(21, "Penalty (coins)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ParentTasksPage_Conditional_12_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskForm.penalty_amount, $event) || (ctx_r2.taskForm.penalty_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div")(24, "label", 25);
    \u0275\u0275text(25, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ParentTasksPage_Conditional_12_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskForm.frequency, $event) || (ctx_r2.taskForm.frequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 32);
    \u0275\u0275text(28, "One Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 33);
    \u0275\u0275text(30, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 34);
    \u0275\u0275text(32, "Weekly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 13)(34, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ParentTasksPage_Conditional_12_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.taskForm.approval_required, $event) || (ctx_r2.taskForm.approval_required = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label", 36);
    \u0275\u0275text(36, "Requires parent approval");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 37);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskForm.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskForm.reward_amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskForm.penalty_amount);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskForm.frequency);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.taskForm.approval_required);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.creating());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.creating() ? "Creating..." : "Create Task", " ");
  }
}
var ParentTasksPage = class _ParentTasksPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  tasks = signal([], ...ngDevMode ? [{ debugName: "tasks" }] : []);
  filter = signal("all", ...ngDevMode ? [{ debugName: "filter" }] : []);
  showCreate = signal(false, ...ngDevMode ? [{ debugName: "showCreate" }] : []);
  creating = signal(false, ...ngDevMode ? [{ debugName: "creating" }] : []);
  filters = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Needs Review" },
    { value: "approved", label: "Approved" }
  ];
  taskForm = { title: "", description: "", reward_amount: 10, penalty_amount: 0, frequency: "one-time", approval_required: true };
  filteredTasks = signal([], ...ngDevMode ? [{ debugName: "filteredTasks" }] : []);
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadTasks();
    });
  }
  loadTasks() {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (!kid)
        return;
      const all = yield this.fs.getTasks(kid.id);
      this.tasks.set(all);
      this.updateFiltered();
    });
  }
  updateFiltered() {
    const f = this.filter();
    const all = this.tasks();
    this.filteredTasks.set(f === "all" ? all : all.filter((t) => t.status === f));
  }
  statusColor(status) {
    return { pending: "#FCD34D", completed: "#4F7DF3", approved: "#34D399", rejected: "#F87171" }[status] || "#71717A";
  }
  createTask() {
    return __async(this, null, function* () {
      if (!this.taskForm.title)
        return;
      this.creating.set(true);
      try {
        const kid = this.auth.selectedKid();
        const user = this.auth.firebaseUser();
        if (!kid || !user)
          return;
        yield this.fs.createTask(user.uid, kid.id, this.taskForm);
        yield this.loadTasks();
        this.showCreate.set(false);
        this.taskForm = { title: "", description: "", reward_amount: 10, penalty_amount: 0, frequency: "one-time", approval_required: true };
      } finally {
        this.creating.set(false);
      }
    });
  }
  approve(id) {
    return __async(this, null, function* () {
      yield this.fs.approveTask(id);
      yield this.loadTasks();
    });
  }
  reject(id) {
    return __async(this, null, function* () {
      yield this.fs.rejectTask(id);
      yield this.loadTasks();
    });
  }
  static \u0275fac = function ParentTasksPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentTasksPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentTasksPage, selectors: [["app-parent-tasks"]], decls: 13, vars: 3, consts: [[1, "animate-fade-in"], [1, "flex", "items-center", "justify-between", "mb-8"], ["data-testid", "tasks-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight"], [1, "text-sm", "mt-1", 2, "color", "var(--fg-muted)"], ["data-testid", "create-task-btn", 1, "btn-primary", "text-sm", 3, "click"], [1, "card", "p-12", "text-center"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "text-sm", 2, "color", "var(--fg-muted)"], [1, "flex", "gap-2", "mb-6"], [3, "ngClass", "border-color"], [1, "space-y-3"], [1, "card", "p-4", "flex", "items-center", "justify-between"], [3, "click", "ngClass"], [1, "flex", "items-center", "gap-2"], [1, "text-sm", "font-semibold"], [1, "badge", "text-[10px]"], [1, "text-xs", "mt-1", 2, "color", "var(--fg-muted)"], [1, "flex", "gap-2"], [1, "text-xs", "px-3", "py-1.5", "rounded-full", "bg-green-500", "text-white", "font-medium", 3, "click"], [1, "text-xs", "px-3", "py-1.5", "rounded-full", "bg-red-500", "text-white", "font-medium", 3, "click"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "card", "p-8", "w-full", "max-w-md", "relative", "z-10", "animate-fade-in", 3, "click"], [1, "text-lg", "font-bold", "font-heading", "mb-6"], [1, "space-y-4", 3, "ngSubmit"], [1, "label"], ["placeholder", "e.g., Clean your room", "name", "title", "data-testid", "task-title-input", 1, "input", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Optional details", "name", "description", 1, "input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "number", "min", "1", "name", "reward", "data-testid", "task-reward-input", 1, "input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "name", "penalty", 1, "input", 3, "ngModelChange", "ngModel"], ["name", "frequency", 1, "input", 3, "ngModelChange", "ngModel"], ["value", "one-time"], ["value", "daily"], ["value", "weekly"], ["type", "checkbox", "id", "approval", "name", "approval", 1, "rounded", 3, "ngModelChange", "ngModel"], ["for", "approval", 1, "text-sm"], ["type", "submit", "data-testid", "submit-task-btn", 1, "btn-primary", "w-full", "py-3", 3, "disabled"]], template: function ParentTasksPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
      \u0275\u0275text(5, "Tasks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function ParentTasksPage_Template_button_click_8_listener() {
        return ctx.showCreate.set(true);
      });
      \u0275\u0275text(9, "+ New Task");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, ParentTasksPage_Conditional_10_Template, 3, 0, "div", 5)(11, ParentTasksPage_Conditional_11_Template, 7, 1);
      \u0275\u0275conditionalCreate(12, ParentTasksPage_Conditional_12_Template, 39, 8, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Manage tasks for ", ((tmp_0_0 = ctx.auth.selectedKid()) == null ? null : tmp_0_0.name) || "your child");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.auth.selectedKid() ? 10 : 11);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCreate() ? 12 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, ParentLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentTasksPage, [{
    type: Component,
    args: [{
      selector: "app-parent-tasks",
      standalone: true,
      imports: [CommonModule, NgClass, FormsModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-2xl font-bold font-heading tracking-tight" data-testid="tasks-heading">Tasks</h1>
            <p class="text-sm mt-1" style="color: var(--fg-muted)">Manage tasks for {{ auth.selectedKid()?.name || 'your child' }}</p>
          </div>
          <button (click)="showCreate.set(true)" class="btn-primary text-sm" data-testid="create-task-btn">+ New Task</button>
        </div>

        @if (!auth.selectedKid()) {
          <div class="card p-12 text-center">
            <p class="text-sm" style="color: var(--fg-muted)">Please add a child first from the Dashboard.</p>
          </div>
        } @else {
          <!-- Filter tabs -->
          <div class="flex gap-2 mb-6">
            @for (f of filters; track f.value) {
              <button (click)="filter.set(f.value)"
                      [ngClass]="filter() === f.value ? 'btn-primary text-xs px-4 py-2' : 'text-xs px-4 py-2 rounded-full border'"
                      [style.border-color]="filter() !== f.value ? 'var(--border)' : ''"
                      [attr.data-testid]="'filter-' + f.value">
                {{ f.label }}
              </button>
            }
          </div>

          @if (filteredTasks().length === 0) {
            <div class="card p-12 text-center">
              <p class="text-sm" style="color: var(--fg-muted)">No tasks yet. Create one to get started!</p>
            </div>
          }

          <div class="space-y-3">
            @for (task of filteredTasks(); track task.id) {
              <div class="card p-4 flex items-center justify-between" [attr.data-testid]="'task-' + task.id">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-semibold">{{ task.title }}</span>
                    <span class="badge text-[10px]" [style.background-color]="statusColor(task.status) + '15'" [style.color]="statusColor(task.status)">{{ task.status }}</span>
                  </div>
                  <p class="text-xs mt-1" style="color: var(--fg-muted)">{{ task.reward_amount }} coins &middot; {{ task.frequency }}</p>
                </div>
                <div class="flex gap-2">
                  @if (task.status === 'completed') {
                    <button (click)="approve(task.id)" class="text-xs px-3 py-1.5 rounded-full bg-green-500 text-white font-medium" [attr.data-testid]="'approve-' + task.id">Approve</button>
                    <button (click)="reject(task.id)" class="text-xs px-3 py-1.5 rounded-full bg-red-500 text-white font-medium" [attr.data-testid]="'reject-' + task.id">Reject</button>
                  }
                </div>
              </div>
            }
          </div>
        }

        <!-- Create Task Modal -->
        @if (showCreate()) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="showCreate.set(false)">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="card p-8 w-full max-w-md relative z-10 animate-fade-in" (click)="$event.stopPropagation()">
              <h2 class="text-lg font-bold font-heading mb-6">Create Task</h2>
              <form (ngSubmit)="createTask()" class="space-y-4">
                <div>
                  <label class="label">Title</label>
                  <input class="input" placeholder="e.g., Clean your room" [(ngModel)]="taskForm.title" name="title" data-testid="task-title-input">
                </div>
                <div>
                  <label class="label">Description</label>
                  <textarea class="input" rows="2" placeholder="Optional details" [(ngModel)]="taskForm.description" name="description"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="label">Reward (coins)</label>
                    <input class="input" type="number" min="1" [(ngModel)]="taskForm.reward_amount" name="reward" data-testid="task-reward-input">
                  </div>
                  <div>
                    <label class="label">Penalty (coins)</label>
                    <input class="input" type="number" min="0" [(ngModel)]="taskForm.penalty_amount" name="penalty">
                  </div>
                </div>
                <div>
                  <label class="label">Frequency</label>
                  <select class="input" [(ngModel)]="taskForm.frequency" name="frequency">
                    <option value="one-time">One Time</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
                <div class="flex items-center gap-2">
                  <input type="checkbox" id="approval" [(ngModel)]="taskForm.approval_required" name="approval" class="rounded">
                  <label for="approval" class="text-sm">Requires parent approval</label>
                </div>
                <button type="submit" class="btn-primary w-full py-3" [disabled]="creating()" data-testid="submit-task-btn">
                  {{ creating() ? 'Creating...' : 'Create Task' }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentTasksPage, { className: "ParentTasksPage", filePath: "src/app/pages/parent-tasks.ts", lineNumber: 116 });
})();
export {
  ParentTasksPage
};
//# sourceMappingURL=chunk-DYAEC2AN.js.map
