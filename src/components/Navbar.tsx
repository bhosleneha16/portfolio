import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const RESUME_FILE_ID = '1c0sK5b-NofrjhG8t89l8caTqNHcgLIaP'
const RESUME_PDF_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    const win = window.open(RESUME_PDF_URL, '_blank', 'noopener,noreferrer')
    if (win) {
      // Drive preview is cross-origin so we can't call win.print() directly.
      // The Drive viewer toolbar exposes a Print button; browsers also expose Ctrl/Cmd+P.
      win.focus()
    }
  }

  return (
    <Box component="nav" className="navbar">
      <Box className="nav-container">
        <Box component="a" href="#" className="nav-logo">
          NB
        </Box>
        <Box
          component="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <Box component="span" />
          <Box component="span" />
          <Box component="span" />
        </Box>
        <List
          component="ul"
          className={`nav-links ${isOpen ? 'active' : ''}`}
          disablePadding
          sx={{ listStyle: 'none' }}
        >
          {navLinks.map((link) => (
            <ListItem
              key={link.href}
              component="li"
              disablePadding
              disableGutters
              sx={{ width: 'auto', display: 'block' }}
            >
              <Box
                component="a"
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
              </Box>
            </ListItem>
          ))}
          <ListItem
            component="li"
            disablePadding
            disableGutters
            sx={{ width: 'auto', display: 'block' }}
          >
            <Box
              component="a"
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
            >
              Resume
            </Box>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Navbar
