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
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fiamsantek%2Fpointer-solid-solidity&env=NODE_API_URL,RINKEBY_PRIVATE_KEY&envDescription=You%20need%20to%20provide%20an%20HTTP%20endpoint%20to%20AlchemyAPI%20or%20other%20web3%20platform%2C%20and%20a%20private%20Ethereum%20key%20to%20interact%20with%20the%20smart%20contract.&envLink=https%3A%2F%2Fgithub.com%2Fiamsantek%2Fpointer-solid-solidity&project-name=keyboards-web3-dispenser&repo-name=keyboards-web3-dispenser&demo-title=Web3%20Keyboards%20Dispenser&demo-description=A%20simple%20Next.js%20app%20to%20intereact%20with%20an%20smart%20contract%20via%20web3%20and%20AlchemyAPI.%20This%20project%20is%20part%20of%20the%20Pointer.gg%20web3%20development%20path.&demo-url=https%3A%2F%2Fkeyboards-dispenser.santek.dev%2F"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
    </footer>
  )
}