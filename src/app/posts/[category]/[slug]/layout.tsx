export default function PostDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex justify-center">{children}</div>;
}
