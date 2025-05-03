"use client";

type Props = {
  html: string;
  className?: string;
};

export default function PostContent({ html, className }: Props) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
