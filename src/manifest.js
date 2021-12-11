//  ==================
//  EXTENSION MANIFEST
//  ==================

module.exports = {
    "name": "MyExtension",
    "description": "A chrome-extension",
    "version": "0.1.0",
    "manifest_version": 3,

    //  POPUP HTML
    //  ==========

    "action": {
        "default_title": "My Extension",
        "default_popup": "popup/index.html",
        //     "default_icon": {
        //         "16": "/icons/myIcon.png",
        //         "32": "/icons/myIcon@2x.png",
        //         "48": "/icons/myIcon@3x.png",
        //         "128": "/icons/myIcon@8x.png"
        //     }
    },

    //  OPTIONS PAGE
    //  ============

    // "options_page": "options.html",

    //  BACKGROUND SCRIPT
    //  =================

    "background": {
        "service_worker": "background.js"
    },

    //  CONTENT SCRIPTS
    //  ===============

    "content_scripts": [
        {
            "matches": [
                "<all_urls>"
            ],
            "js": [
                "content.js"
            ]
        }
    ],

    //  ICONS
    //  =====

    // "icons": {
    //     "16": "/icons/myIcon.png",
    //     "32": "/icons/myIcon@2x.png",
    //     "48": "/icons/myIcon@3x.png",
    //     "128": "/icons/myIcon@8x.png"
    // },

    //  COMMANDS
    //  ========

    "commands": {
        "Ctrl+Q": {
            "suggested_key": {
                "default": "Ctrl+Q",
                "mac": "Command+Q"
            },
            "description": "Reload Extension"
        }
    },

    //  PERMISSIONS
    //  ===========

    "permissions": [
        // "bookmarks"
    ]
}