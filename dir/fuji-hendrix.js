const ruleSet = [
    {
        parameter: 'fuji',
        default: {
            static: {},
            parameters: [{
                key: 'cards',
                parameter: 'cards'
            }]
        },
        values: []
    },
    {
        parameter: 'cards',
        default: [
            "cardHero",
            "cardWatchOnTv",
            "cardDownloadAndWatch",
            "cardWatchOnDevice",
            "cardWatchContentSampling",
            "cardKidsValueProp",
            "2cardKidsValueProp",
            "cardFaq"
        ],
        values: [
            {
                feature: 'isFreePlanAvailable',
                value: [
                    'cardHero',
                    'cardWatchOnTv',
                    'cardWatchOnDevice',
                    'cardKidsValueProp',
                    'cardDownloadAndWatch',
                    'cardWatchContentSampling',
                    'cardFaq',
                ]
            },

        ]
    },
    {
        parameter: 'cardHero',
        default: {
            static: {
                cardType: 'cardHero',
                image: 'vlv',
                name: 'heroFuji'
            },
            parameters: [
                {
                    key: 'labels',
                    parameter: 'cardHeroLabels'
                }
            ]
        },
        values: []
    },
    {
        parameter: 'cardHeroLabels',
        default: {
            static: {},
            parameters: [
                {
                    key: 'headline',
                    parameter: 'cardHeroHeadline'
                },
                {
                    key: 'subHeadline',
                    parameter: 'cardHeroSubHeadline'
                }
            ]
        },
        values: []
    },
    {
        parameter: 'cardHeroHeadline',
        default: 'device_headline_fuji',
        values: [
            {
                feature: 'isHeadlineTesting',
                value: 'device_headline_fuji.override'
            }
        ]
    },
    // ...
    {
        feature: 'isFreePlanAvailable',
        requirements: [
            {
                type: 'dynamicProperty',
                key: 'free.plan.enabled',
                mustBe: true
            }
        ]
    },
    {
        feature: 'isHeadlineTesting',
        requirements: [
            abTest(true)
        ]
    }
]
