module.exports = {
    "dataSource": "commits",
    "includeMessages": "all",
    "changelogFilename": "CHANGELOG.md",
    "groupBy": {
        '✨ New Features:': ['enhancement'],
        '🐛 Bug Fixes:': ['bug'],
        '📄 Documentation:': ['documentation'],
        '🛠️ Refactors:': ['refactor'],
        '♻️ Tests:': ['test'],
        '📈 Performance:': ['performance'],
        '⚓ Dependency upgrades:': ['dependencies'],
        '  Chore:': ['chore'],
        '  Style:': ['style'],
        '  Hack': ['hack'],
        '⚠️ Breaking Changes': ['breaking-change']
    }
}