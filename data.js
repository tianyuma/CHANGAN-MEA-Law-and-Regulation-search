// 数据文件
const countriesData = {
    "沙特阿拉伯": {
        "产品合规要求": [
            {
                "要素": "安全与质量标准",
                "要求": "所有进口及销售车辆必须符合 SASO 技术法规（Technical Regulations for Vehicles & Parts），并在进口前通过 SABER 平台取得产品符合性证书 (Certificate of Conformity, CoC)。不符合标准的车辆禁止清关。",
                "标准": "参考后面链接（以下举例）\nGSO MV-2026 MY-D2\nSASO 2900: 2021 - 安全标准\nSASO DMS 认证 - 防盗系统\nSASO 2917: 2020 - 轮胎\nSASO CoC 认证",
                "监管机构": "GSO\nSASO\nZATCA Vehicle Import Controls",
                "参考链接": [
                    {"text": "GSO标准查询", "url": "https://www.gso.org.sa/store/standards?query=vehicle"},
                    {"text": "SASO官网", "url": "https://www.saso.gov.sa/en/pages/default.aspx"},
                    {"text": "ZATCA车辆进口服务", "url": "https://zatca.gov.sa/"}
                ],
                "附件": [
                    {"text": "SASO 2900标准PDF", "url": "pdf_attachments/saso-2900.pdf"},
                    {"text": "GSO MV-2026技术规范", "url": "pdf_attachments/gso-mv-2026.pdf"}
                ]
            },
            {
                "要素": "环保与燃油经济性标准",
                "要求": "所有轻型车辆必须符合 沙特燃油经济性标准（CAFE） 并张贴能效标签。根据GSO要求排放需满足欧5排放标准",
                "标准": "参考链接（以下举例）\n《Technical Regulations for Motor Vehicles (2025 MY‑D3)》Euro 5 排放\nSASO 2847: 2025 - 油耗与标签",
                "监管机构": "GSO SASO  Saudi Energy Efficiency Center (SEEC)",
                "参考链接": [
                    {"text": "GSO标准查询", "url": "https://www.gso.org.sa/store/standards?query=vehicle"}
                ],
                "附件": []
            }
        ],
        "保修与售后服务": [
            {
                "要素": "法定保修期",
                "要求": "无统一法定年限，但根据《商业代理法》，经销商需提供\"合理期限\"的保修（通常 ≥3年或100,000 km），并履行厂商承诺。",
                "标准": "《Consumer Protection Law》Article 46 Compliance with applicable requirements：Economic operators who make available a product or a service to the consumer shall ensure that this product or service fully complies with standards and specifications, quality standards and other applicable terms and requirements.\nArticle 51：The economic operator shall be liable towards the consumer for any breach of legal warranty which becomes apparent within two years of the time of delivery of the product.",
                "监管机构": "MOC + Commercial Agencies Law",
                "参考链接": [
                    {"text": "消费者保护法", "url": "https://istitlaa.ncc.gov.sa/en/Trade/mci/Consumer/Pages/default.aspx?utm_source=chatgpt.com"}
                ],
                "附件": [
                    {"text": "消费者保护法PDF", "url": "pdf_attachments/consumer-protection.pdf"}
                ]
            }
        ],
        "信息披露与数据隐私": []
    },
    "阿联酋": {
        "产品合规要求": [
            {
                "要素": "安全与质量标准",
                "要求": "所有进入 UAE 市场的新车 必须取得 ESMA/联邦的 Type Approval 车辆型式认证（TAC）。包含：安全标准、制动、碰撞、照明、VIN、轮胎、ESMA 适用的 GSO/GCC 技术法规等。未获 TAC 不得进口与销售。",
                "标准": "参考后面链接（以下为举例）\nGSO MV-2026 MY-D2\nUAE.S 2698:2024",
                "监管机构": "ESMA（Emirates Authority for Standardization & Metrology）",
                "参考链接": [
                    {"text": "GSO标准查询", "url": "https://www.gso.org.sa/store/standards?query=vehicle"},
                    {"text": "MOIAT官网", "url": "https://moiat.gov.ae/en/"}
                ],
                "附件": [
                    {"text": "ESMA认证指南PDF", "url": "pdf_attachments/esma-guide.pdf"}
                ]
            }
        ],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "卡塔尔": {
        "产品合规要求": [
            {
                "要素": "安全与质量标准",
                "要求": "新车须符合 GSO / GCC 技术法规（Motor Vehicles technical regs），进口时需提交符合性证明（CoC / Certificate of Conformity）或相应型式批准文件；未合格车辆禁止投放市场。",
                "标准": "参考后面链接（以下为举例）\nGSO MV-2026 MY-D2",
                "监管机构": "GSO（Gulf Standardization Organization）；MoCI（Qatar Ministry of Commerce & Industry）",
                "参考链接": [
                    {"text": "GSO标准查询", "url": "https://www.gso.org.sa/store/standards?query=vehicle"},
                    {"text": "MoCI官网", "url": "https://www.moci.gov.qa/en/"}
                ],
                "附件": [
                    {"text": "GSO技术规范PDF", "url": "pdf_attachments/gso-spec.pdf"}
                ]
            }
        ],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "巴林": {
        "产品合规要求": [],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "科威特": {
        "产品合规要求": [],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "伊朗": {
        "产品合规要求": [],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "埃及": {
        "产品合规要求": [],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "南非": {
        "产品合规要求": [],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "阿尔及利亚": {
        "产品合规要求": [],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    },
    "摩洛哥": {
        "产品合规要求": [],
        "保修与售后服务": [],
        "信息披露与数据隐私": []
    }
};