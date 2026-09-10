# Icons & Logos — Stablecoin Payout Platform

53 个 SVG,四类,命名即组件名(Figma 用 `/` 自动分组):

- token/{usdt,usdc,eth,trx,sol,bnb,btc}          彩色圆形 + `-mono` 单色(Ink #14213D)
- network/{tron,ethereum,solana,polygon,base,arbitrum,bsc}   同上
- flag/{usd,eur,gbp,hkd,sgd,jpy,aud,cad,chf,aed,cny,krw}     圆形国旗,按 ISO 4217 币种代码
- brand/{visa,mastercard,americanexpress,swift,sepa,stripe,wise,paypal,revolut,coinbase,binance,tether,circle}   单色

来源与协议:token/network 来自 web3icons(MIT);flag 来自 circle-flags(MIT);brand 来自 simple-icons(CC0)。
代币与品牌标志为各发行方 / 公司的商标,仅用于标识支持的资产与合作方,不要改色变形。

使用规则(见设计文档 5.6):
- 加密与法币统一圆形、同尺寸:16 / 20 / 24 / 32
- 和链相关的场景用 token + 右下角 network 小徽章;余额、兑换、付款只放 token
- 密集表格与 badge 用 -mono;彩色只在余额卡、兑换卡、确认页
- 图标永远配币种代码文字,不单独出现
