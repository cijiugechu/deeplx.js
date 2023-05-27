class TooManyRequestsError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'Too Many Requests Error'
  }
}

export { TooManyRequestsError }
