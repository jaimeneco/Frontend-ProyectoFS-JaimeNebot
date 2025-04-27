const Productos = [
    {
        "title": "Tabla Surf Alpha",
        "marca": "Quiksilver",
        "type": "surf",
        "price": "20€/día",
        "img": "./src/public/products/img-surf-1.png"
    },
    {
        "title": "Tabla Surf WaveX",
        "marca": "Billabong",
        "type": "surf",
        "price": "22€/día",
        "img": "./src/public/products/img-surf-2.png",
    },
    {
        "title": "Tabla Surf Flow",
        "marca": "Rip Curl",
        "type": "surf",
        "price": "18€/día",
        "img": "./src/public/products/img-surf-3.png"
    },
    {
        "title": "Tabla Surf Oceanic",
        "marca": "Hurley",
        "type": "surf",
        "price": "21€/día",
        "img": "./src/public/products/img-surf-4.png"
    },
    {
        "title": "Tabla Surf Hydra",
        "marca": "O'Neill",
        "type": "surf",
        "price": "19€/día",
        "img": "./src/public/products/img-surf-5.png"
    },
    {
        "title": "Tabla Kitesurf Viento",
        "marca": "Cabrinha",
        "type": "kitesurf",
        "price": "25€/día",
        "img": "./src/public/products/img-kite-1.png"
    },
    {
        "title": "Tabla Kitesurf Aero",
        "marca": "North",
        "type": "kitesurf",
        "price": "27€/día",
        "img": "./src/public/products/img-kite-2.png"
    },
    {
        "title": "Tabla Kitesurf Nova",
        "marca": "Duotone",
        "type": "kitesurf",
        "price": "30€/día",
        "img": "./src/public/products/img-kite-3.png"
    },
    {
        "title": "Tabla Kitesurf Pulse",
        "marca": "Liquid Force",
        "type": "kitesurf",
        "price": "26€/día",
        "img": "./src/public/products/img-kite-4.png"
    },
    {
        "title": "Tabla Kitesurf Drift",
        "marca": "Slingshot",
        "type": "kitesurf",
        "price": "28€/día",
        "img": "./src/public/products/img-kite-5.png"
    },
    {
        "title": "Tabla Snow Storm",
        "marca": "Burton",
        "type": "snow",
        "price": "23€/día",
        "img": "./src/public/products/img-snow-1.png"
    },
    {
        "title": "Tabla Snow Rocket",
        "marca": "Salomon",
        "type": "snow",
        "price": "24€/día",
        "img": "./src/public/products/img-snow-2.png"
    },
    {
        "title": "Tabla Snow Phantom",
        "marca": "K2",
        "type": "snow",
        "price": "26€/día",
        "img": "./src/public/products/img-snow-3.png"
    },
    {
        "title": "Tabla Snow Gravity",
        "marca": "GNU",
        "type": "snow",
        "price": "25€/día",
        "img": "./src/public/products/img-snow-4.png"
    },
    {
        "title": "Tabla Snow Avalanche",
        "marca": "Lib Tech",
        "type": "snow",
        "price": "27€/día",
        "img": "./src/public/products/img-snow-5.png"
    },
    {
        "title": "Tabla Ski Zenith",
        "marca": "Rossignol",
        "type": "ski",
        "price": "22€/día",
        "img": "./src/public/products/img-ski-1.png"
    },
    {
        "title": "Tabla Ski Blaze",
        "marca": "Atomic",
        "type": "ski",
        "price": "24€/día",
        "img": "./src/public/products/img-ski-2.png"
    },
    {
        "title": "Tabla Ski Thunder",
        "marca": "Volkl",
        "type": "ski",
        "price": "25€/día",
        "img": "./src/public/products/img-ski-3.png"
    },
    {
        "title": "Tabla Ski Pulse",
        "marca": "Head",
        "type": "ski",
        "price": "23€/día",
        "img": "./src/public/products/img-ski-4.png"
    },
    {
        "title": "Tabla Ski Rocket",
        "marca": "Fischer",
        "type": "ski",
        "price": "26€/día",
        "img": "./src/public/products/img-ski-5.png"
    },
    {
        "title": "Neopreno ProFlex 3/2mm",
        "marca": "Rip Curl",
        "type": "accesorio mar",
        "price": "10€/día",
        "img": "./src/public/products/img-equipMar-1.png"
    },
    {
        "title": "Neopreno UltraStretch 4/3mm",
        "marca": "O'Neill",
        "type": "accesorio mar",
        "price": "12€/día",
        "img": "./src/public/products/img-equipMar-2.png"
    },
    {
        "title": "Neopreno EcoWave 3/2mm",
        "marca": "Patagonia",
        "type": "accesorio mar",
        "price": "11€/día",
        "img": "./src/public/products/img-equipMar-3.png"
    },
    {
        "title": "Neopreno WarmFlex 5/4mm",
        "marca": "Billabong",
        "type": "accesorio mar",
        "price": "13€/día",
        "img": "./src/public/products/img-equipMar-4.png"
    },
    {
        "title": "Invento SurfWave 6'",
        "marca": "FCS",
        "type": "accesorio mar",
        "price": "5€/día",
        "img": "./src/public/products/img-equipMar-5.png"
    },
    {
        "title": "Chaquetón Snow StormShell",
        "marca": "Burton",
        "type": "accesorio montaña",
        "price": "15€/día",
        "img": "./src/public/products/img-equipMon-1.png"
    },
    {
        "title": "Chaquetón Snow GlacierPro",
        "marca": "The North Face",
        "type": "accesorio montaña",
        "price": "16€/día",
        "img": "./src/public/products/img-equipMon-2.png"
    },
    {
        "title": "Gafas Snow VisionX",
        "marca": "Oakley",
        "type": "accesorio montaña",
        "price": "8€/día",
        "img": "./src/public/products/img-equipMon-3.png"
    },
    {
        "title": "Gafas Snow PolarMax",
        "marca": "Smith",
        "type": "accesorio montaña",
        "price": "9€/día",
        "img": "./src/public/products/img-equipMon-4.png"
    },
    {
        "title": "Casco Snow AlpineGuard",
        "marca": "POC",
        "type": "accesorio montaña",
        "price": "10€/día",
        "img": "./src/public/products/img-equipMon-5.png"
    }
]
