'use strict';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { findNodeHandle, Platform } from 'react-native';
import { WorkletEventHandler } from '../reanimated2/WorkletEventHandler';
import '../reanimated2/layoutReanimation/animationsManager';
import invariant from 'invariant';
import { adaptViewConfig } from '../ConfigHelper';
import { RNRenderer } from '../reanimated2/platform-specific/RNRenderer';
import { enableLayoutAnimations } from '../reanimated2/core';
import { SharedTransition, LayoutAnimationType } from '../reanimated2/layoutReanimation';
import { getShadowNodeWrapperFromRef } from '../reanimated2/fabricUtils';
import { removeFromPropsRegistry } from '../reanimated2/PropsRegistry';
import { getReduceMotionFromConfig } from '../reanimated2/animation/util';
import { maybeBuild } from '../animationBuilder';
import { SkipEnteringContext } from '../reanimated2/component/LayoutAnimationConfig';
import JSPropsUpdater from './JSPropsUpdater';
import { has, flattenArray } from './utils';
import setAndForwardRef from './setAndForwardRef';
import { isFabric, isJest, isWeb, shouldBeUseWeb } from '../reanimated2/PlatformChecker';
import { InlinePropManager } from './InlinePropManager';
import { PropsFilter } from './PropsFilter';
import { startWebLayoutAnimation, tryActivateLayoutTransition, configureWebLayoutAnimations, getReducedMotionFromConfig, saveSnapshot } from '../reanimated2/layoutReanimation/web';
import { updateLayoutAnimations } from '../reanimated2/UpdateLayoutAnimations';
import { addHTMLMutationObserver } from '../reanimated2/layoutReanimation/web/domUtils';
import { getViewInfo } from './getViewInfo';
const IS_WEB = isWeb();
if (IS_WEB) {
  configureWebLayoutAnimations();
}
function onlyAnimatedStyles(styles) {
  return styles.filter(style => style === null || style === void 0 ? void 0 : style.viewDescriptors);
}

/**
 * Lets you create an Animated version of any React Native component.
 *
 * @param component - The component you want to make animatable.
 * @returns A component that Reanimated is capable of animating.
 * @see https://docs.swmansion.com/react-native-reanimated/docs/core/createAnimatedComponent
 */

// Don't change the order of overloads, since such a change breaks current behavior

/**
 * @deprecated Please use `Animated.FlatList` component instead of calling `Animated.createAnimatedComponent(FlatList)` manually.
 */
// @ts-ignore This is required to create this overload, since type of createAnimatedComponent is incorrect and doesn't include typeof FlatList

export function createAnimatedComponent(Component, options) {
  invariant(typeof Component !== 'function' || Component.prototype && Component.prototype.isReactComponent, `Looks like you're passing a function component \`${Component.name}\` to \`createAnimatedComponent\` function which supports only class components. Please wrap your function component with \`React.forwardRef()\` or use a class component instead.`);
  class AnimatedComponent extends React.Component {
    constructor(props) {
      super(props);
      _defineProperty(this, "_styles", null);
      _defineProperty(this, "_animatedProps", void 0);
      _defineProperty(this, "_viewTag", -1);
      _defineProperty(this, "_isFirstRender", true);
      _defineProperty(this, "jestAnimatedStyle", {
        value: {}
      });
      _defineProperty(this, "_component", null);
      _defineProperty(this, "_sharedElementTransition", null);
      _defineProperty(this, "_jsPropsUpdater", new JSPropsUpdater());
      _defineProperty(this, "_InlinePropManager", new InlinePropManager());
      _defineProperty(this, "_PropsFilter", new PropsFilter());
      _defineProperty(this, "_viewInfo", void 0);
      _defineProperty(this, "context", void 0);
      _defineProperty(this, "_setComponentRef", setAndForwardRef({
        getForwardedRef: () => this.props.forwardedRef,
        setLocalRef: ref => {
          // TODO update config

          const tag = IS_WEB ? ref : findNodeHandle(ref);
          this._viewTag = tag;
          const {
            layout,
            entering,
            exiting,
            sharedTransitionTag
          } = this.props;
          if ((layout || entering || exiting || sharedTransitionTag) && tag != null) {
            var _this$context;
            if (!shouldBeUseWeb()) {
              enableLayoutAnimations(true, false);
            }
            if (sharedTransitionTag) {
              this._configureSharedTransition();
            }
            const skipEntering = (_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.current;
            if (entering && !skipEntering) {
              var _this$props;
              updateLayoutAnimations(tag, LayoutAnimationType.ENTERING, maybeBuild(entering, (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.style, AnimatedComponent.displayName));
            }
          }
          if (ref !== this._component) {
            this._component = ref;
          }
        }
      }));
      if (isJest()) {
        this.jestAnimatedStyle = {
          value: {}
        };
      }
    }
    componentDidMount() {
      this._viewTag = this._getViewInfo().viewTag;
      this._attachNativeEvents();
      this._jsPropsUpdater.addOnJSPropsChangeListener(this);
      this._attachAnimatedStyles();
      this._InlinePropManager.attachInlineProps(this, this._getViewInfo());
      const layout = this.props.layout;
      if (layout) {
        this._configureLayoutTransition();
      }
      if (IS_WEB) {
        if (this.props.exiting) {
          saveSnapshot(this._component);
        }
        if (!this.props.entering || getReducedMotionFromConfig(this.props.entering)) {
          this._isFirstRender = false;
          return;
        }
        startWebLayoutAnimation(this.props, this._component, LayoutAnimationType.ENTERING);
      }
      this._isFirstRender = false;
    }
    componentWillUnmount() {
      var _this$_sharedElementT;
      this._detachNativeEvents();
      this._jsPropsUpdater.removeOnJSPropsChangeListener(this);
      this._detachStyles();
      this._InlinePropManager.detachInlineProps();
      if (this.props.sharedTransitionTag) {
        this._configureSharedTransition(true);
      }
      (_this$_sharedElementT = this._sharedElementTransition) === null || _this$_sharedElementT === void 0 || _this$_sharedElementT.unregisterTransition(this._viewTag, true);
      const exiting = this.props.exiting;
      if (IS_WEB && this._component && this.props.exiting && !getReducedMotionFromConfig(this.props.exiting)) {
        addHTMLMutationObserver();
        startWebLayoutAnimation(this.props, this._component, LayoutAnimationType.EXITING);
      } else if (exiting) {
        const reduceMotionInExiting = 'getReduceMotion' in exiting && typeof exiting.getReduceMotion === 'function' ? getReduceMotionFromConfig(exiting.getReduceMotion()) : getReduceMotionFromConfig();
        if (!reduceMotionInExiting) {
          var _this$props2;
          updateLayoutAnimations(this._viewTag, LayoutAnimationType.EXITING, maybeBuild(exiting, (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.style, AnimatedComponent.displayName));
        }
      }
    }
    _getEventViewRef() {
      var _this$_component, _getScrollableNode, _ref;
      // Make sure to get the scrollable node for components that implement
      // `ScrollResponder.Mixin`.
      return (_this$_component = this._component) !== null && _this$_component !== void 0 && _this$_component.getScrollableNode ? (_getScrollableNode = (_ref = this._component).getScrollableNode) === null || _getScrollableNode === void 0 ? void 0 : _getScrollableNode.call(_ref) : this._component;
    }
    _attachNativeEvents() {
      for (const key in this.props) {
        const prop = this.props[key];
        if (has('workletEventHandler', prop) && prop.workletEventHandler instanceof WorkletEventHandler) {
          prop.workletEventHandler.registerForEvents(this._viewTag, key);
        }
      }
    }
    _detachNativeEvents() {
      for (const key in this.props) {
        const prop = this.props[key];
        if (has('workletEventHandler', prop) && prop.workletEventHandler instanceof WorkletEventHandler) {
          prop.workletEventHandler.unregisterFromEvents(this._viewTag);
        }
      }
    }
    _detachStyles() {
      if (IS_WEB && this._styles !== null) {
        for (const style of this._styles) {
          style.viewsRef.remove(this);
        }
      } else if (this._viewTag !== -1 && this._styles !== null) {
        var _this$props$animatedP;
        for (const style of this._styles) {
          style.viewDescriptors.remove(this._viewTag);
        }
        if ((_this$props$animatedP = this.props.animatedProps) !== null && _this$props$animatedP !== void 0 && _this$props$animatedP.viewDescriptors) {
          this.props.animatedProps.viewDescriptors.remove(this._viewTag);
        }
        if (isFabric()) {
          removeFromPropsRegistry(this._viewTag);
        }
      }
    }
    _updateNativeEvents(prevProps) {
      for (const key in prevProps) {
        const prevProp = prevProps[key];
        if (has('workletEventHandler', prevProp) && prevProp.workletEventHandler instanceof WorkletEventHandler) {
          const newProp = this.props[key];
          if (!newProp) {
            // Prop got deleted
            prevProp.workletEventHandler.unregisterFromEvents(this._viewTag);
          } else if (has('workletEventHandler', newProp) && newProp.workletEventHandler instanceof WorkletEventHandler && newProp.workletEventHandler !== prevProp.workletEventHandler) {
            // Prop got changed
            prevProp.workletEventHandler.unregisterFromEvents(this._viewTag);
            newProp.workletEventHandler.registerForEvents(this._viewTag);
          }
        }
      }
      for (const key in this.props) {
        const newProp = this.props[key];
        if (has('workletEventHandler', newProp) && newProp.workletEventHandler instanceof WorkletEventHandler && !prevProps[key]) {
          // Prop got added
          newProp.workletEventHandler.registerForEvents(this._viewTag);
        }
      }
    }
    _updateFromNative(props) {
      if (options !== null && options !== void 0 && options.setNativeProps) {
        options.setNativeProps(this._component, props);
      } else {
        var _this$_component2, _this$_component2$set;
        (_this$_component2 = this._component) === null || _this$_component2 === void 0 || (_this$_component2$set = _this$_component2.setNativeProps) === null || _this$_component2$set === void 0 || _this$_component2$set.call(_this$_component2, props);
      }
    }
    _getViewInfo() {
      var _this$_component3, _getAnimatableRef, _ref2;
      if (this._viewInfo !== undefined) {
        return this._viewInfo;
      }
      let viewTag;
      let viewName;
      let shadowNodeWrapper = null;
      let viewConfig;
      // Component can specify ref which should be animated when animated version of the component is created.
      // Otherwise, we animate the component itself.
      const component = (_this$_component3 = this._component) !== null && _this$_component3 !== void 0 && _this$_component3.getAnimatableRef ? (_getAnimatableRef = (_ref2 = this._component).getAnimatableRef) === null || _getAnimatableRef === void 0 ? void 0 : _getAnimatableRef.call(_ref2) : this;
      if (IS_WEB) {
        // At this point I assume that `_setComponentRef` was already called and `_component` is set.
        // `this._component` on web represents HTMLElement of our component, that's why we use casting
        viewTag = this._component;
        viewName = null;
        shadowNodeWrapper = null;
        viewConfig = null;
      } else {
        // hostInstance can be null for a component that doesn't render anything (render function returns null). Example: svg Stop: https://github.com/react-native-svg/react-native-svg/blob/develop/src/elements/Stop.tsx
        const hostInstance = RNRenderer.findHostInstance_DEPRECATED(component);
        if (!hostInstance) {
          throw new Error('[Reanimated] Cannot find host instance for this component. Maybe it renders nothing?');
        }
        const viewInfo = getViewInfo(hostInstance);
        viewTag = viewInfo.viewTag;
        viewName = viewInfo.viewName;
        viewConfig = viewInfo.viewConfig;
        shadowNodeWrapper = isFabric() ? getShadowNodeWrapperFromRef(this) : null;
      }
      this._viewInfo = {
        viewTag,
        viewName,
        shadowNodeWrapper,
        viewConfig
      };
      return this._viewInfo;
    }
    _attachAnimatedStyles() {
      var _this$props$animatedP2, _this$props$animatedP3;
      const styles = this.props.style ? onlyAnimatedStyles(flattenArray(this.props.style)) : [];
      const prevStyles = this._styles;
      this._styles = styles;
      const prevAnimatedProps = this._animatedProps;
      this._animatedProps = this.props.animatedProps;
      const {
        viewTag,
        viewName,
        shadowNodeWrapper,
        viewConfig
      } = this._getViewInfo();

      // update UI props whitelist for this view
      const hasReanimated2Props = ((_this$props$animatedP2 = this.props.animatedProps) === null || _this$props$animatedP2 === void 0 ? void 0 : _this$props$animatedP2.viewDescriptors) || styles.length;
      if (hasReanimated2Props && viewConfig) {
        adaptViewConfig(viewConfig);
      }
      this._viewTag = viewTag;

      // remove old styles
      if (prevStyles) {
        // in most of the cases, views have only a single animated style and it remains unchanged
        const hasOneSameStyle = styles.length === 1 && prevStyles.length === 1 && styles[0] === prevStyles[0];
        if (!hasOneSameStyle) {
          // otherwise, remove each style that is not present in new styles
          for (const prevStyle of prevStyles) {
            const isPresent = styles.some(style => style === prevStyle);
            if (!isPresent) {
              prevStyle.viewDescriptors.remove(viewTag);
            }
          }
        }
      }
      styles.forEach(style => {
        style.viewDescriptors.add({
          tag: viewTag,
          name: viewName,
          shadowNodeWrapper
        });
        if (isJest()) {
          /**
           * We need to connect Jest's TestObject instance whose contains just props object
           * with the updateProps() function where we update the properties of the component.
           * We can't update props object directly because TestObject contains a copy of props - look at render function:
           * const props = this._filterNonAnimatedProps(this.props);
           */
          this.jestAnimatedStyle.value = {
            ...this.jestAnimatedStyle.value,
            ...style.initial.value
          };
          style.jestAnimatedStyle.current = this.jestAnimatedStyle;
        }
      });

      // detach old animatedProps
      if (prevAnimatedProps && prevAnimatedProps !== this.props.animatedProps) {
        prevAnimatedProps.viewDescriptors.remove(viewTag);
      }

      // attach animatedProps property
      if ((_this$props$animatedP3 = this.props.animatedProps) !== null && _this$props$animatedP3 !== void 0 && _this$props$animatedP3.viewDescriptors) {
        this.props.animatedProps.viewDescriptors.add({
          tag: viewTag,
          name: viewName,
          shadowNodeWrapper: shadowNodeWrapper
        });
      }
    }
    componentDidUpdate(prevProps, _prevState,
    // This type comes straight from React
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    snapshot) {
      const layout = this.props.layout;
      const oldLayout = prevProps.layout;
      if (layout !== oldLayout) {
        this._configureLayoutTransition();
      }
      if (this.props.sharedTransitionTag !== undefined || prevProps.sharedTransitionTag !== undefined) {
        this._configureSharedTransition();
      }
      this._updateNativeEvents(prevProps);
      this._attachAnimatedStyles();
      this._InlinePropManager.attachInlineProps(this, this._getViewInfo());
      if (IS_WEB && this.props.exiting) {
        saveSnapshot(this._component);
      }

      // Snapshot won't be undefined because it comes from getSnapshotBeforeUpdate method
      if (IS_WEB && snapshot !== null && this.props.layout && !getReducedMotionFromConfig(this.props.layout)) {
        tryActivateLayoutTransition(this.props, this._component, snapshot);
      }
    }
    _configureLayoutTransition() {
      const layout = this.props.layout ? maybeBuild(this.props.layout, undefined /* We don't have to warn user if style has common properties with animation for LAYOUT */, AnimatedComponent.displayName) : undefined;
      updateLayoutAnimations(this._viewTag, LayoutAnimationType.LAYOUT, layout);
    }
    _configureSharedTransition(isUnmounting = false) {
      if (IS_WEB) {
        return;
      }
      const {
        sharedTransitionTag
      } = this.props;
      if (!sharedTransitionTag) {
        var _this$_sharedElementT2;
        (_this$_sharedElementT2 = this._sharedElementTransition) === null || _this$_sharedElementT2 === void 0 || _this$_sharedElementT2.unregisterTransition(this._viewTag, isUnmounting);
        this._sharedElementTransition = null;
        return;
      }
      const sharedElementTransition = this.props.sharedTransitionStyle ?? this._sharedElementTransition ?? new SharedTransition();
      sharedElementTransition.registerTransition(this._viewTag, sharedTransitionTag, isUnmounting);
      this._sharedElementTransition = sharedElementTransition;
    }
    // This is a component lifecycle method from React, therefore we are not calling it directly.
    // It is called before the component gets rerendered. This way we can access components' position before it changed
    // and later on, in componentDidUpdate, calculate translation for layout transition.
    getSnapshotBeforeUpdate() {
      var _this$_component4;
      if (IS_WEB && ((_this$_component4 = this._component) === null || _this$_component4 === void 0 ? void 0 : _this$_component4.getBoundingClientRect) !== undefined) {
        return this._component.getBoundingClientRect();
      }
      return null;
    }
    render() {
      const filteredProps = this._PropsFilter.filterNonAnimatedProps(this);
      if (isJest()) {
        filteredProps.jestAnimatedStyle = this.jestAnimatedStyle;
      }

      // Layout animations on web are set inside `componentDidMount` method, which is called after first render.
      // Because of that we can encounter a situation in which component is visible for a short amount of time, and later on animation triggers.
      // I've tested that on various browsers and devices and it did not happen to me. To be sure that it won't happen to someone else,
      // I've decided to hide component at first render. Its visibility is reset in `componentDidMount`.
      if (this._isFirstRender && IS_WEB && filteredProps.entering && !getReducedMotionFromConfig(filteredProps.entering)) {
        filteredProps.style = {
          ...(filteredProps.style ?? {}),
          visibility: 'hidden' // Hide component until `componentDidMount` triggers
        };
      }
      const platformProps = Platform.select({
        web: {},
        default: {
          collapsable: false
        }
      });
      return /*#__PURE__*/React.createElement(Component, _extends({}, filteredProps, {
        // Casting is used here, because ref can be null - in that case it cannot be assigned to HTMLElement.
        // After spending some time trying to figure out what to do with this problem, we decided to leave it this way
        ref: this._setComponentRef
      }, platformProps));
    }
  }
  _defineProperty(AnimatedComponent, "displayName", void 0);
  _defineProperty(AnimatedComponent, "contextType", SkipEnteringContext);
  AnimatedComponent.displayName = `AnimatedComponent(${Component.displayName || Component.name || 'Component'})`;
  return /*#__PURE__*/React.forwardRef((props, ref) => {
    return /*#__PURE__*/React.createElement(AnimatedComponent, _extends({}, props, ref === null ? null : {
      forwardedRef: ref
    }));
  });
}
//# sourceMappingURL=createAnimatedComponent.js.map