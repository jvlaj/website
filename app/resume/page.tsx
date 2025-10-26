export default function Resume() {
  return (
    <div className="mx-auto h-[calc(100vh-8rem)] overflow-hidden">
      <iframe
        src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
        title="Resume PDF"
        className="h-full w-full border-0 bg-white dark:bg-slate-900"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
