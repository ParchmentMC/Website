
// URL to the Minecraft versions manfiest (JSON)
const mc_manifest_url = "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json"
// URL to the Parchment versions endpoint (JSON)
const parchment_versions_url = "https://versioning.parchmentmc.org/versions"

// Fallback sort key array
// When the Minecraft versions manifest cannot be fetched to use as the sort key, this array is used instead
const fallbackSortKey = [ "1.19.3", "1.19.2", "1.18.2", "1.17.1", "1.16.5" ]

// Element ID of the versions table
const tableId = "versions-table"

//
//
//

const table = document.getElementById(tableId)
if (table === null || table.tagName !== "TABLE") {
    throw new Error("Couldn't find <table> element with ID " + tableId + ": " + table)
}

const manifestPromise = fetch(mc_manifest_url)
    .then(r => {
        if (!r.ok) throw new Error("Response not OK: ", r)
        return r.json()
    })
    .catch(err => {
        console.error("Error trying to fetch Minecraft version manifest: ", err)
        return null
    })

fetch(parchment_versions_url)
    .then(r => {
        if (!r.ok) throw new Error("Response not OK: ", r)
        return r.json()
    })
    .then(versions => handleVersions(versions))
    .catch(err => console.error("Error trying to fetch Parchment mappings versions: ", err))

async function handleVersions(data) {
    var sortKey;

    const manifest = await manifestPromise;
    if (manifest !== null) sortKey = manifest.versions.map(v => v.id)
    else {
        console.log("Using fallback sort key array")
        sortKey = fallbackSortKey
    }

    const keys = Object.keys(data.releases)
    keys.sort((a, b) => sortKey.indexOf(a) - sortKey.indexOf(b))

    const tbody = table.getElementsByTagName('tbody')[0]

    const newRows = []
    for (const versionKey of keys) {
        const mappingsVersion = data.releases[versionKey]
        newRows.push(createRow(versionKey, mappingsVersion))
    }
    tbody.replaceChildren(...newRows)
}

function createRow(mcVersion, mappingsVersion) {
    const row = document.createElement("tr")

    const mcVersionElem = document.createElement("td")
    {
        const mcVer = document.createElement("strong")
        mcVer.textContent = mcVersion
        mcVer.className = "mc-version"
        mcVersionElem.appendChild(mcVer)
    }
    row.appendChild(mcVersionElem)

    const mappingsVersionElem = document.createElement("td")
    {
        const mappingsVer = document.createElement("code")
        mappingsVer.textContent = mappingsVersion
        mappingsVer.className = "mappings-version"
        mappingsVersionElem.appendChild(mappingsVer)
    }
    row.appendChild(mappingsVersionElem)

    return row
}
