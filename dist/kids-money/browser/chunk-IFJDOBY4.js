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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QO3DPW6E.js";
import {
  STORIES
} from "./chunk-X5GXZTWU.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// src/app/pages/parent-learning.ts
var _forTrack0 = ($index, $item) => $item.id;
function ParentLearningPage_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Done");
    \u0275\u0275elementEnd();
  }
}
function ParentLearningPage_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function ParentLearningPage_For_8_Template_div_click_0_listener() {
      const story_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedStory.set(story_r2));
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 9);
    \u0275\u0275element(4, "path", 10)(5, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 12)(7, "h3", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, ParentLearningPage_For_8_Conditional_11_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 14);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const story_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-testid", "story-" + story_r2.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(story_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", story_r2.category, " \xB7 ", story_r2.reward_xp, " XP");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isCompleted(story_r2.id) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(story_r2.description);
  }
}
function ParentLearningPage_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ParentLearningPage_Conditional_9_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.quizMode.set(true));
    });
    \u0275\u0275text(1, "Take Quiz");
    \u0275\u0275elementEnd();
  }
}
function ParentLearningPage_Conditional_9_Conditional_8_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function ParentLearningPage_Conditional_9_Conditional_8_For_2_For_5_Template_button_click_0_listener() {
      const \u0275$index_69_r8 = \u0275\u0275restoreView(_r7).$index;
      const \u0275$index_61_r9 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.answers[\u0275$index_61_r9] = \u0275$index_69_r8);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    const \u0275$index_69_r8 = ctx.$index;
    const \u0275$index_61_r9 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("border-color", ctx_r2.answers[\u0275$index_61_r9] === \u0275$index_69_r8 ? "" : "var(--border)");
    \u0275\u0275property("ngClass", ctx_r2.answers[\u0275$index_61_r9] === \u0275$index_69_r8 ? "bg-primary text-white" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r10);
  }
}
function ParentLearningPage_Conditional_9_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275repeaterCreate(4, ParentLearningPage_Conditional_9_Conditional_8_For_2_For_5_Template, 2, 4, "button", 29, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r11 = ctx.$implicit;
    const \u0275$index_61_r9 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275$index_61_r9 + 1, ". ", q_r11.question);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(q_r11.options);
  }
}
function ParentLearningPage_Conditional_9_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const story_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Score: ", ctx_r2.quizResult(), "/", story_r12.questions.length);
  }
}
function ParentLearningPage_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, ParentLearningPage_Conditional_9_Conditional_8_For_2_Template, 6, 2, "div", 24, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function ParentLearningPage_Conditional_9_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const story_r12 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitQuiz(story_r12));
    });
    \u0275\u0275text(4, "Submit Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParentLearningPage_Conditional_9_Conditional_8_Conditional_5_Template, 3, 2, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const story_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(story_r12.questions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.submitting());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.quizResult() ? 5 : -1);
  }
}
function ParentLearningPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ParentLearningPage_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedStory.set(null));
    });
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275listener("click", function ParentLearningPage_Conditional_9_Template_div_click_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "h2", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ParentLearningPage_Conditional_9_Conditional_7_Template, 2, 0, "button", 21)(8, ParentLearningPage_Conditional_9_Conditional_8_Template, 6, 2, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const story_r12 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(story_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(story_r12.content);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.quizMode() ? 7 : 8);
  }
}
var ParentLearningPage = class _ParentLearningPage {
  auth = inject(AuthService);
  fs = inject(FirestoreService);
  stories = STORIES;
  completedIds = signal([], ...ngDevMode ? [{ debugName: "completedIds" }] : []);
  selectedStory = signal(null, ...ngDevMode ? [{ debugName: "selectedStory" }] : []);
  quizMode = signal(false, ...ngDevMode ? [{ debugName: "quizMode" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  quizResult = signal(null, ...ngDevMode ? [{ debugName: "quizResult" }] : []);
  answers = {};
  ngOnInit() {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (kid) {
        const progress = yield this.fs.getLearningProgress(kid.id);
        this.completedIds.set(progress.map((p) => p.story_id));
      }
    });
  }
  isCompleted(id) {
    return this.completedIds().includes(id);
  }
  submitQuiz(story) {
    return __async(this, null, function* () {
      const kid = this.auth.selectedKid();
      if (!kid)
        return;
      this.submitting.set(true);
      try {
        let score = 0;
        story.questions.forEach((q, i) => {
          if (this.answers[i] === q.correct)
            score++;
        });
        yield this.fs.completeLesson(kid.id, story.id, score, story.reward_xp);
        this.quizResult.set(score);
        this.completedIds.update((ids) => [...ids, story.id]);
      } finally {
        this.submitting.set(false);
      }
    });
  }
  static \u0275fac = function ParentLearningPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentLearningPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentLearningPage, selectors: [["app-parent-learning"]], decls: 10, vars: 2, consts: [[1, "animate-fade-in"], ["data-testid", "learning-heading", 1, "text-2xl", "font-bold", "font-heading", "tracking-tight", "mb-2"], [1, "text-sm", "mb-8", 2, "color", "var(--fg-muted)"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "card", "p-6", "cursor-pointer", "transition-all", "hover:scale-[1.02]"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "card", "p-6", "cursor-pointer", "transition-all", "hover:scale-[1.02]", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-3"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", 2, "background-color", "color-mix(in srgb, var(--color-primary) 10%, transparent)"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-primary"], ["d", "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z", "stroke-width", "2"], ["d", "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z", "stroke-width", "2"], [1, "flex-1"], [1, "font-semibold", "font-heading", "text-sm"], [1, "text-xs", 2, "color", "var(--fg-muted)"], [1, "badge", "text-[10px]", 2, "background-color", "#34D39920", "color", "#34D399"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "absolute", "inset-0", "bg-black/50"], [1, "card", "p-8", "w-full", "max-w-lg", "relative", "z-10", "max-h-[90vh]", "overflow-y-auto", "animate-fade-in", 3, "click"], [1, "text-lg", "font-bold", "font-heading", "mb-4"], [1, "text-sm", "leading-relaxed", "mb-6", 2, "color", "var(--fg-muted)"], [1, "btn-primary", "w-full", "py-3"], [1, "space-y-4"], [1, "btn-primary", "w-full", "py-3", 3, "click"], [1, "p-4", "rounded-xl", 2, "background-color", "var(--muted)"], [1, "btn-primary", "w-full", "py-3", 3, "click", "disabled"], [1, "p-4", "rounded-xl", "text-center", 2, "background-color", "var(--muted)"], [1, "text-sm", "font-medium", "mb-2"], [1, "grid", "grid-cols-2", "gap-2"], [1, "text-xs", "p-2", "rounded-xl", "border", "transition-all", 3, "ngClass", "border-color"], [1, "text-xs", "p-2", "rounded-xl", "border", "transition-all", 3, "click", "ngClass"], [1, "text-sm", "font-bold"]], template: function ParentLearningPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-parent-layout")(1, "div", 0)(2, "h1", 1);
      \u0275\u0275text(3, "Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275repeaterCreate(7, ParentLearningPage_For_8_Template, 14, 6, "div", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(9, ParentLearningPage_Conditional_9_Template, 9, 3, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_2_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Financial stories and quizzes for ", (tmp_0_0 = ctx.auth.selectedKid()) == null ? null : tmp_0_0.name);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.stories);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.selectedStory()) ? 9 : -1, tmp_2_0);
    }
  }, dependencies: [CommonModule, NgClass, ParentLayoutComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentLearningPage, [{
    type: Component,
    args: [{
      selector: "app-parent-learning",
      standalone: true,
      imports: [CommonModule, ParentLayoutComponent],
      template: `
    <app-parent-layout>
      <div class="animate-fade-in">
        <h1 class="text-2xl font-bold font-heading tracking-tight mb-2" data-testid="learning-heading">Learning</h1>
        <p class="text-sm mb-8" style="color: var(--fg-muted)">Financial stories and quizzes for {{ auth.selectedKid()?.name }}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (story of stories; track story.id) {
            <div class="card p-6 cursor-pointer transition-all hover:scale-[1.02]" (click)="selectedStory.set(story)" [attr.data-testid]="'story-' + story.id">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background-color: color-mix(in srgb, var(--color-primary) 10%, transparent)">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke-width="2"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke-width="2"/></svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold font-heading text-sm">{{ story.title }}</h3>
                  <p class="text-xs" style="color: var(--fg-muted)">{{ story.category }} &middot; {{ story.reward_xp }} XP</p>
                </div>
                @if (isCompleted(story.id)) {
                  <span class="badge text-[10px]" style="background-color: #34D39920; color: #34D399">Done</span>
                }
              </div>
              <p class="text-xs" style="color: var(--fg-muted)">{{ story.description }}</p>
            </div>
          }
        </div>

        @if (selectedStory(); as story) {
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4" (click)="selectedStory.set(null)">
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="card p-8 w-full max-w-lg relative z-10 max-h-[90vh] overflow-y-auto animate-fade-in" (click)="$event.stopPropagation()">
              <h2 class="text-lg font-bold font-heading mb-4">{{ story.title }}</h2>
              <p class="text-sm leading-relaxed mb-6" style="color: var(--fg-muted)">{{ story.content }}</p>

              @if (!quizMode()) {
                <button (click)="quizMode.set(true)" class="btn-primary w-full py-3">Take Quiz</button>
              } @else {
                <div class="space-y-4">
                  @for (q of story.questions; track $index; let i = $index) {
                    <div class="p-4 rounded-xl" style="background-color: var(--muted)">
                      <p class="text-sm font-medium mb-2">{{ i + 1 }}. {{ q.question }}</p>
                      <div class="grid grid-cols-2 gap-2">
                        @for (opt of q.options; track $index; let j = $index) {
                          <button (click)="answers[i] = j"
                                  [ngClass]="answers[i] === j ? 'bg-primary text-white' : ''"
                                  class="text-xs p-2 rounded-xl border transition-all"
                                  [style.border-color]="answers[i] === j ? '' : 'var(--border)'">{{ opt }}</button>
                        }
                      </div>
                    </div>
                  }
                  <button (click)="submitQuiz(story)" class="btn-primary w-full py-3" [disabled]="submitting()">Submit Quiz</button>
                  @if (quizResult()) {
                    <div class="p-4 rounded-xl text-center" style="background-color: var(--muted)">
                      <p class="text-sm font-bold">Score: {{ quizResult() }}/{{ story.questions.length }}</p>
                    </div>
                  }
                </div>
              }
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentLearningPage, { className: "ParentLearningPage", filePath: "src/app/pages/parent-learning.ts", lineNumber: 77 });
})();
export {
  ParentLearningPage
};
//# sourceMappingURL=chunk-IFJDOBY4.js.map
