// https://www.benmvp.com/blog/polymorphic-react-components-typescript/
// https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/

import React from 'react';

// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<
	Component extends
		| keyof JSX.IntrinsicElements
		| React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<
	Component,
	React.ComponentPropsWithoutRef<Component>
>;

type AsProp<Component extends React.ElementType> = {
	/**
	 * An override of the default HTML tag.
	 * Can also be another React component.
	 */
	as?: Component;
};

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
	ExtendedProps = Record<string, unknown>,
	OverrideProps = Record<string, unknown>
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component must be passed in.
 */
export type InheritableElementProps<
	Component extends React.ElementType,
	Props = Record<string, unknown>
> = ExtendableProps<PropsOf<Component>, Props>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<
	Component extends React.ElementType,
	Props = Record<string, unknown>
> = InheritableElementProps<Component, Props & AsProp<Component>>;

/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export type PolymorphicRef<Component extends React.ElementType> =
	React.ComponentPropsWithRef<Component>['ref'];
/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
export type PolymorphicComponentPropsWithRef<
	Component extends React.ElementType,
	Props = Record<string, unknown>
> = PolymorphicComponentProps<Component, Props> & {
	ref?: PolymorphicRef<Component>;
};
