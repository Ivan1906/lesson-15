import { compose, withProps, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps({})
);

export default hoistStatics(enhancer)(Component);