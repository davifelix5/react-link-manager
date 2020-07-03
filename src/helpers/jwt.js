export const getTokenExpire = token => {
    if (!token) return 0
    try {
        const [, payload] = token.split('.')
        const { exp: expires } = JSON.parse(atob(payload))
        const expiresInSeconds = expires - Date.now() / 1000
        return expiresInSeconds
    } catch {
        return 0;
    }
}