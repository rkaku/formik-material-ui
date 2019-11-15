import React from "react"
import Clipboard from "clipboard"

export default function useClipboard () {
  const buttonRef = React.useRef( null )
  const targetRef = React.useRef( null )
  const [ isCopied, setIsCopied ] = React.useState( false )
  const handleSuccessMessage = React.useCallback( () => {
    setIsCopied( true )
    setTimeout( () => setIsCopied( false ), 1234 )
  }, [] )
  React.useEffect( () => {
    const clipboard = new Clipboard( buttonRef.current, { target: () => targetRef.current } )
    clipboard.on( "success", () => handleSuccessMessage() )
    return () => { clipboard.destroy() }
  }, [ handleSuccessMessage ] )
  return [ buttonRef, targetRef, isCopied ]
}