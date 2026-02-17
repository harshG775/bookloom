const booksData = [
    {
        id: "1",
        title: "Mastering React Architecture",
        slug: "mastering-react-architecture",
        author: {
            id: "a1",
            name: "Harsh Gaur",
        },
        metadata: {
            description: "Advanced patterns for scalable React applications.",
            totalPages: 320,
            language: "English",
            category: "Programming",
            tags: ["React", "Frontend", "Architecture"],
        },
        pricing: {
            price: 799,
            currency: "INR",
            isFree: false,
        },
        file: {
            storageKey: "books/react-architecture/full.pdf",
            previewStorageKey: "books/react-architecture/preview.pdf",
            fileSize: 5_200_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        title: "TypeScript Deep Dive",
        slug: "typescript-deep-dive",
        author: {
            id: "a2",
            name: "Ankit Sharma",
        },
        metadata: {
            description: "Comprehensive guide to mastering TypeScript.",
            totalPages: 280,
            language: "English",
            category: "Programming",
            tags: ["TypeScript", "JavaScript"],
        },
        pricing: {
            price: 699,
            currency: "INR",
            isFree: false,
        },
        file: {
            storageKey: "books/typescript-deep-dive/full.pdf",
            previewStorageKey: "books/typescript-deep-dive/preview.pdf",
            fileSize: 4_800_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        title: "Node.js Production Handbook",
        slug: "nodejs-production-handbook",
        author: {
            id: "a3",
            name: "Rahul Verma",
        },
        metadata: {
            description: "Deploy, scale and optimize Node.js apps.",
            totalPages: 350,
            language: "English",
            category: "Backend",
            tags: ["Node.js", "Scaling", "DevOps"],
        },
        pricing: {
            price: 899,
            currency: "INR",
            isFree: false,
        },
        file: {
            storageKey: "books/nodejs-production/full.pdf",
            previewStorageKey: "books/nodejs-production/preview.pdf",
            fileSize: 6_100_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "4",
        title: "UI Design Systems with Tailwind",
        slug: "ui-design-systems-tailwind",
        author: {
            id: "a4",
            name: "Priya Kapoor",
        },
        metadata: {
            description: "Build consistent and scalable design systems.",
            totalPages: 210,
            language: "English",
            category: "Design",
            tags: ["Tailwind", "UI", "Design Systems"],
        },
        pricing: {
            price: 599,
            currency: "INR",
            isFree: false,
        },
        file: {
            storageKey: "books/design-systems/full.pdf",
            previewStorageKey: "books/design-systems/preview.pdf",
            fileSize: 3_900_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "5",
        title: "MongoDB for Modern Apps",
        slug: "mongodb-modern-apps",
        author: {
            id: "a5",
            name: "Neha Singh",
        },
        metadata: {
            description: "Schema design and performance tuning in MongoDB.",
            totalPages: 260,
            language: "English",
            category: "Database",
            tags: ["MongoDB", "NoSQL"],
        },
        pricing: {
            price: 749,
            currency: "INR",
            isFree: false,
        },
        file: {
            storageKey: "books/mongodb/full.pdf",
            previewStorageKey: "books/mongodb/preview.pdf",
            fileSize: 4_300_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "6",
        title: "Getting Started with PostgreSQL",
        slug: "getting-started-postgresql",
        author: {
            id: "a6",
            name: "Amit Patel",
        },
        metadata: {
            description: "A beginner-friendly introduction to PostgreSQL.",
            totalPages: 190,
            language: "English",
            category: "Database",
            tags: ["PostgreSQL", "SQL"],
        },
        pricing: {
            price: 0,
            currency: "INR",
            isFree: true,
        },
        file: {
            storageKey: "books/postgresql/full.pdf",
            previewStorageKey: null,
            fileSize: 2_800_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "7",
        title: "Fullstack SaaS Blueprint",
        slug: "fullstack-saas-blueprint",
        author: {
            id: "a7",
            name: "Rohan Mehta",
        },
        metadata: {
            description: "Build and scale a SaaS product from scratch.",
            totalPages: 400,
            language: "English",
            category: "Business",
            tags: ["SaaS", "Startup", "Architecture"],
        },
        pricing: {
            price: 999,
            currency: "INR",
            isFree: false,
        },
        file: {
            storageKey: "books/saas-blueprint/full.pdf",
            previewStorageKey: "books/saas-blueprint/preview.pdf",
            fileSize: 7_200_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "8",
        title: "Redis Caching Strategies",
        slug: "redis-caching-strategies",
        author: {
            id: "a8",
            name: "Karan Malhotra",
        },
        metadata: {
            description: "Improve performance with Redis caching techniques.",
            totalPages: 230,
            language: "English",
            category: "Backend",
            tags: ["Redis", "Caching", "Performance"],
        },
        pricing: {
            price: 649,
            currency: "INR",
            isFree: false,
        },
        file: {
            storageKey: "books/redis/full.pdf",
            previewStorageKey: "books/redis/preview.pdf",
            fileSize: 3_700_000,
            mimeType: "application/pdf",
        },
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
]
type createBookPayload = {
    title: string
    slug: string
    author: {
        id: string
        name: string
    }
    metadata: {
        description: string
        totalPages: number
        language: string
        category: string
        tags: string[]
    }
    pricing: {
        price: number
        currency: string
        isFree: boolean
    }
    file: {
        storageKey: string
        previewStorageKey: string
        fileSize: number
        mimeType: string
    }
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
}

// Admin dashboard
export const getBookByBookIdAdminServerFn = async (id: string) => {
    const book = booksData.find((book) => book.id === id)
    if (!book) throw new Error("Book not found")
    return book
}

export const getBooksAdminServerFn = async ({ page, perPage }: { page: number; perPage: number }) => {
    const startIndex = (page - 1) * perPage
    const endIndex = startIndex + perPage
    return booksData.slice(startIndex, endIndex)
}

export const createBookAdminServerFn = async (book: createBookPayload) => {
    const newBook = { id: crypto.randomUUID(), ...book }
    booksData.push(newBook)
    return newBook
}

export const updateBookAdminServerFn = async (id: string, book: createBookPayload) => {
    const bookIndex = booksData.findIndex((book) => book.id === id)
    if (bookIndex === -1) throw new Error("Book not found")
    booksData[bookIndex] = { id, ...book }
    return booksData[bookIndex]
}

export const deleteBookAdminServerFn = async (id: string) => {
    const bookIndex = booksData.findIndex((book) => book.id === id)
    if (bookIndex === -1) throw new Error("Book not found")
    booksData.splice(bookIndex, 1)
    return id
}

// User main website
export const getBookByBookIdServerFn = async (id: string) => {
    const book = booksData.find((book) => book.id === id)
    if (!book) throw new Error("Book not found")
    return book
}

export const getBooksServerFn = async ({ page, perPage }: { page: number; perPage: number }) => {
    const startIndex = (page - 1) * perPage
    const endIndex = startIndex + perPage
    return booksData.slice(startIndex, endIndex)
}
export const getAllUserPublicBooksServerFn = async ({ page, perPage }: { page: number; perPage: number }) => {
    const startIndex = (page - 1) * perPage
    const endIndex = startIndex + perPage
    return booksData.slice(startIndex, endIndex)
}
export const getUserPurchasedByBookIdServerFn = async (id: string) => {
    const book = booksData.find((book) => book.id === id)
    if (!book) throw new Error("Book not found")
    return book
}
