export default function TopBar() {
  return (
    <div className="w-full bg-neutral-900 text-white text-xs md:text-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between py-2 gap-1 md:gap-0">
        <p className="opacity-90 text-center md:text-left">24×7 Emergency Support • Avg. first response in 10 minutes</p>
        <a href="https://www.abacusdesk.com/" target="_blank" className="underline underline-offset-4">abacusdesk.com</a>
      </div>
    </div>
  )
}