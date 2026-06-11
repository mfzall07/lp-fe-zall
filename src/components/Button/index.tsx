import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "outline" | "ghost";

interface BaseProps {
    variant?: Variant;
    block?: boolean;
    children: ReactNode;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    href?: undefined;
}

interface ButtonAsLink extends BaseProps {
    href: string;
    type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<Variant, string> = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    accent: "btn btn-accent",
    outline: "btn btn-outline",
    ghost: "btn btn-ghost"
};

function buildClassName(variant: Variant, block: boolean) {
    if (block) return `${variantClass[variant]} btn-block`;
    return variantClass[variant];
}

function filterButtonProps(input: Record<string, unknown>) {
    const { variant, block, ...rest } = input;
    void variant;
    void block;
    return rest;
}

export default function Button(props: ButtonProps) {
    const variant = props.variant ?? "primary";
    const block = props.block ?? false;
    const className = buildClassName(variant, block);

    if ("href" in props && props.href) {
        return (
            <Link href={props.href} className={className}>
                {props.children}
            </Link>
        );
    }

    const buttonProps = props as ButtonAsButton;
    const { children, ...rest } = buttonProps;
    const filtered = filterButtonProps(rest);
    return (
        <button className={className} {...filtered}>
            {children}
        </button>
    );
}
