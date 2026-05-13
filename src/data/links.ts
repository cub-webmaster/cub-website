interface Link {
    url: string,
    label: string
}

const links: Record<string, Link> = {
    instagram: { url: "https://www.instagram.com/camuniarchery/", label: "CUB instagram"},
    facebook: { url: "https://www.facebook.com/camuniarchery/", label: "CUB facebook"},
    twitter: { url: "https://twitter.com/CamUniArchery", label: "CUB twitter(X)"}
}

export default links