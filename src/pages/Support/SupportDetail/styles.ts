import { Paper, styled } from '@mui/material'
import ReactMarkdown from 'react-markdown'

export const StyledMessageTimeStampLeft = styled('div')(() => ({
  color: "lightgrey",
  position: 'absolute',
  fontSize: '.85em',
  fontWeight: 300,
  marginTop: '10px',
  bottom: '2px',
  //right: '5px',
  left: '8px',
}))

export const StyledReactMarkdownMessageContentLeft = styled(ReactMarkdown)(
  () => ({
    padding: 0,
    paddingBottom: "10px",
    margin: 0,
    color: 'white',
    // overflowWrap: "normal",
    // overflowY: 'scroll',
    overflowX: 'auto',
  })
)

export const StyledReactMarkdownMessageContentRight = styled(ReactMarkdown)(
  () => ({
    padding: 0,
    paddingBottom: "20px",
    margin: 0,
    color: 'white',
    // overflowWrap: "normal",
    // overflowY: 'scroll',
    overflowX: 'auto',
  })
)

export const StyledMessageRowLeft = styled('div')(() => ({
  display: 'flex',
}))

export const StyledMessageRowRight = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}))

export const StyledDisplayName = styled('div')(() => ({
  marginLeft: '20px',
}))

export const StyledMessageBlue = styled('div')(() => ({
  position: 'relative',
  marginLeft: '20px',
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: '#d2d2cc',
  // width: "40%",
  textAlign: 'left',
  font: "400 .9em 'Open Sans', sans-serif",
  border: '1px solid #d2d2cc',
  borderRadius: '10px',
  '&:after': {
    content: "''",
    position: 'absolute',
    width: '0',
    height: '0',
    borderTop: '15px solid #d2d2cc',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    top: '0',
    left: '-15px',
  },
  '&:before': {
    content: "''",
    position: 'absolute',
    width: '0',
    height: '0',
    borderTop: '17px solid #d2d2cc',
    borderLeft: '16px solid transparent',
    borderRight: '16px solid transparent',
    top: '-1px',
    left: '-17px',
  },
}))

export const StyledMessageOrange = styled('div')(() => ({
  position: 'relative',
  marginRight: '20px',
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: '#85e249',
  width: '60%',
  textAlign: 'left',
  font: "400 .9em 'Open Sans', sans-serif",
  border: '1px solid #85e249',
  borderRadius: '10px',
  '&:after': {
    content: "''",
    position: 'absolute',
    width: '0',
    height: '0',
    borderTop: '15px solid #85e249',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    top: '0',
    right: '-15px',
  },
  '&:before': {
    content: "''",
    position: 'absolute',
    width: '0',
    height: '0',
    borderTop: '17px solid #85e249',
    borderLeft: '16px solid transparent',
    borderRight: '16px solid transparent',
    top: '-1px',
    right: '-17px',
  },
}))

export const StyledPaper = styled(Paper)(() => ({
  width: '100vw',
  height: '100vh',
  // maxWidth: '1000px',
  // maxHeight: '1400px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
}))

export const StyledPaperMessageBody = styled(Paper)(() => ({
  width: 'calc( 100% - 20px )',
  margin: 10,
  backgroundColor: 'rgb(113, 147, 193)',
  // overflowX: 'hidden',
  overflowY: 'scroll',
  height: 'calc( 100% - 80px )',
}))

export const StyledDivContainer = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
