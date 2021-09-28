import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

const SearchResultElement = ({ element }) => {
  const classes = useStyles()
  const { slug, title, section, description } = element
  return (
    <Card container alignItems="center" style={{ width: '100%' }}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {section}
        </Typography>
        <Typography variant="h6" component="h2">
          <Link to={slug}>{title}</Link>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description ? description.substring(0, 100) + '...' : null}
        </Typography>
      </CardContent>
    </Card>
  )
}

SearchResultElement.propTypes = {
  element: PropTypes.object.isRequired
}

export default SearchResultElement
