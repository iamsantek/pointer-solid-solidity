export default function Footer() {
  return (
    <footer className='mx-auto mt-48 text-center'>
      <a
        href='https://www.pointer.gg?utm_source=stackblitz-solidity'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn web3 dev and earn crypto rewards at{" "}
        <span className=''>Pointer</span>
      </a>
      <p>Art from Joanne Li @joanne on Figma <a href='https://keeybs.com' className='underline'>keeybs.com</a> <a href='https://creativecommons.org/licenses/by/4.0/' className="underline">CC 4.0</a></p>
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
    </footer>
  )
}