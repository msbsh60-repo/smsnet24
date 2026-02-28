export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="container-layout grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">smsnet24</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Professional SMS and communication platform built for enterprise-scale messaging.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">+880 1705691269, +8801733393711-12</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">admin2@digitallabbd.com</p>
        </div>
        <div>
          <h4 className="font-semibold">Social</h4>
          <a className="mt-2 inline-block text-sm text-brand-600" href="https://www.facebook.com/smsnet24" target="_blank">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
