import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Accounts() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const {  ensName } = useEnsName({ address })
  const { ensAvatar } = useEnsAvatar({ ensName })

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}