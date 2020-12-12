import { connect } from 'react-redux'

export const mapStateToProps = (mapStateToProps, options) => {
  return connect(mapStateToProps, {});
}

export const mapDispatchToProps = (mapDispatchToProps, options) => {
  const mapStateToProps = () => ({});
  return connect(mapStateToProps, mapDispatchToProps);
}