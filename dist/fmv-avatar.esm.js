import { props } from 'bootstrap-vue/esm/components/link/link';

//

var script = {
  props: Object.assign({}, {element: {
      type: String,
      default: function () { return 'span'; }
    },
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    imgClass: {
      type: String,
      default: null
    },
    title: {
      type: [String, Boolean],
      default: null
    },
    titleClass: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: function (val) { return ['xs', 'sm', 'lg', 'xl', 'xxl'].includes(val); }
    },
    landscape: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    circle: {
      type: Boolean,
      default: false
    },
    noLink: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: null,
      validator: function (val) { return ['online', 'offline'].includes(val); }
    }},
    props),
  computed: {
    imgClasses: function imgClasses() {
      return [
        'avatar-img',
        this.rounded && !this.circle ? 'rounded' : null,
        this.circle ? 'rounded-circle' : null,
        this.imgClass ? this.imgClass : null
      ]
    },
    titleClasses: function titleClasses() {
      return [
        'avatar-title',
        this.rounded && !this.circle ? 'rounded' : null,
        this.circle ? 'rounded-circle' : null,
        this.titleClass ? this.titleClass : null
      ]
    },
    avatarClasses: function avatarClasses() {
      return [
        'avatar',
        this.landscape ? 'avatar-4by3' : null,
        this.size ? ("avatar-" + (this.size)) : null,
        this.status ? ("avatar-" + (this.status)) : null
      ]
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.noLink ? _vm.element : 'b-link',{tag:"component",class:_vm.avatarClasses,attrs:{"to":_vm.to}},[(_vm.title)?_c('span',{class:_vm.titleClasses},[_vm._t("default",[_vm._v(_vm._s(_vm.title))])],2):_c('b-img',{class:_vm.imgClasses,attrs:{"src":_vm.src,"alt":_vm.alt}}),_vm._v(" "),_vm._t("after-img")],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var fmvAvatar = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export { fmvAvatar as FmvAvatar };
