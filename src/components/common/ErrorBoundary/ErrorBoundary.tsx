import { Component, ReactElement } from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
  error: Nullable<Error>;
}

export type RejectedFallbackFuncType = ({
  error,
  reset,
}: {
  error: Nullable<Error>;
  reset: () => void;
}) => ReactElement;

interface IProps extends IParentComponentProps {
  renderFallback: RejectedFallbackFuncType;
  resetKey?: string[];
  [x: string]: unknown;
}

class ErrorBoundary extends Component<IProps, IErrorBoundaryState> {
  initState: IErrorBoundaryState = { hasError: false, error: null };

  constructor(props: IProps) {
    super(props);
    this.state = this.initState;
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps: IProps) {
    if (!this.state.hasError == null) return;
    if (prevProps.resetKey !== this.props.resetKey) {
      this.resetErrorBoundary();
    }
  }

  componentDidCatch(error: Error) {
    // Error의 로깅 방식을 추가한다
    console.log(error);
  }

  resetErrorBoundary() {
    this.setState(this.initState);
  }

  render() {
    const { children, renderFallback } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }

    return children;
  }
}

export default ErrorBoundary;
