# CineBox Print Commerce Strategy

## Overview
**Digital → Physical**: Every scene in CineBox can be ordered as a museum-quality physical print.

Think: Samsung Frame displays digital art, but users want to own physical prints too. CineBox bridges both.

---

## Product Offering

### Print Sizes
- **8x10"** - $35 (desk/shelf display)
- **16x20"** - $75 (wall art)
- **24x36"** - $150 (statement piece)
- **Custom** - Quote (special requests)

### Paper Options
- **Standard**: Museum-quality archival paper (100-year lifespan)
- **Premium**: Hahnemühle Photo Rag (fine art paper)
- **Canvas**: Stretched canvas (gallery wrap)

### Framing
- **No frame**: Print only
- **Black mat**: Museum board, black frame ($+50)
- **White mat**: Museum board, white frame ($+50)
- **Walnut frame**: Premium wood, museum glass ($+150)
- **Samsung Frame style**: Match Frame TV aesthetic ($+200)

### Special Editions
- **Standard**: Scene still, no signature
- **Limited Edition** (100 prints): Numbered, certificate
- **DP Signed** (25 prints): Signed by Director of Photography ($+500)
- **Director Signed** (10 prints): Signed by director ($+2000)

---

## User Flow

### Digital → Print Purchase

**1. Browsing Archive**
```
User saves scene to collection
  ↓
"Print this scene" button appears
  ↓
User clicks
```

**2. Print Configuration**
```
Select size: 16x20"
Select paper: Premium Hahnemühle
Select frame: Black mat
Add to cart: $75 + $50 = $125
```

**3. Checkout**
```
Shipping address
Payment (Stripe)
Estimated delivery: 7-10 days
```

**4. Fulfillment**
```
CineBox → Print partner API
Print partner (Printful/Gelato) fulfills
Ships in A24 x CineBox packaging
Includes certificate of authenticity
```

**5. Delivery**
```
User receives:
- Archival print
- Certificate (film, scene, metadata)
- Care instructions
- A24 x CineBox branded packaging
```

---

## Revenue Model

### Pricing Example (16x20" print)
```
Retail price: $75
- Print cost: $15 (Printful)
- Platform fee: $10
- Shipping: $8
= Gross profit: $42

Revenue split:
- A24: $25 (60%)
- CineBox: $17 (40%)
```

### Limited Edition (DP Signed, 24x36")
```
Retail price: $650
- Print cost: $25
- Framing: $100
- DP signing fee: $100
- Platform fee: $25
= Gross profit: $400

Revenue split:
- A24: $240 (60%)
- DP: $100 (signing fee)
- CineBox: $160 (40%)
```

---

## Partnership

### A24 Benefits
1. **Merchandise expansion**: Physical prints from entire catalog
2. **Archive monetization**: Unlock value from stills library
3. **Brand extension**: A24 scenes as collectible art
4. **Passive revenue**: Prints sold without A24 fulfillment overhead
5. **Data insights**: Which scenes/films sell best as prints

### Print Partner (Printful/Gelato)
- **On-demand printing**: No inventory risk
- **Global fulfillment**: Ship from nearest location
- **Quality control**: Museum-grade prints
- **API integration**: Seamless ordering
- **Custom packaging**: A24 x CineBox branded

---

## Competitive Landscape

| Product | Category | Strength | CineBox Advantage |
|---------|----------|----------|-------------------|
| **A24 Shop** | Merch | Official A24 | CineBox adds on-demand, any scene |
| **Redbubble** | Print-on-demand | Easy upload | CineBox has official A24 license |
| **Etsy** | Handmade/vintage | Artisan feel | CineBox has museum quality + official |
| **Frame TV Art Store** | Digital art | Hardware integration | CineBox adds cinematic scenes |
| **Gallery prints** | Fine art | High quality | CineBox has film IP + Frame display |

**Unique Position:**
- Only official A24 scene prints (licensed)
- Only product with digital display + physical prints
- Only Frame TV → Physical print pipeline

---

## Marketing

### Messaging
**"Display it. Own it."**

Every scene you display on Frame TV can become a physical print in your space.

**Use Cases:**
1. **Cinephile Collectors**: "Own iconic A24 moments"
2. **Gift Giving**: "The perfect gift for film lovers"
3. **Interior Design**: "Elevate your space with cinematic art"
4. **Creative Professionals**: "Reference prints for your studio"

### Launch Campaign
**"From Screen to Wall"**
- Show same scene: on Frame TV → as physical print
- Lifestyle photography: scenes in modern homes
- Director quotes: "This moment means..."
- Limited edition drop: First 100 DP-signed prints

---

## Operations

### Print Partner Integration
**Printful API** (recommended)
- API for order submission
- Automatic fulfillment
- Global shipping
- Quality guarantee
- White-label packaging option

```typescript
// Order flow
async function orderPrint(scene: Scene, config: PrintConfig) {
  // 1. Submit to Printful
  const order = await printful.createOrder({
    recipient: user.shippingAddress,
    items: [{
      variant_id: config.size, // 16x20
      files: [{ url: scene.highResUrl }],
      options: [
        { id: 'paper', value: 'premium' },
        { id: 'frame', value: 'black_mat' }
      ]
    }]
  })

  // 2. Charge user
  await stripe.charge(user, config.price)

  // 3. Revenue split
  await payout(a24, config.price * 0.6)
  await payout(cinebox, config.price * 0.4)

  // 4. Track order
  await db.orders.create({
    userId: user.id,
    sceneId: scene.id,
    printfulOrderId: order.id,
    status: 'processing'
  })
}
```

---

## Success Metrics

### North Star
**Print Orders Per Month**

### Supporting Metrics
1. **Conversion Rate**: % users who order prints
2. **AOV** (Average Order Value): Avg spent per order
3. **Repeat Rate**: % users who order 2+ prints
4. **Size Mix**: Distribution of sizes ordered
5. **Limited Edition Sell-Through**: % LE prints sold

### Business Goals
- **Year 1**: 500 prints/month ($30K MRR)
- **Year 2**: 2,000 prints/month ($120K MRR)
- **Year 3**: 5,000 prints/month ($300K MRR)

---

## Risks & Mitigations

### Risk: Print Quality Issues
**Mitigation**: Partner with Printful (proven quality), offer satisfaction guarantee

### Risk: Copyright Disputes
**Mitigation**: Official A24 partnership, clear licensing terms

### Risk: Low Conversion (Digital → Print)
**Mitigation**: Sampling program (send free 8x10 to early users), user testimonials

### Risk: Shipping Costs
**Mitigation**: Built into pricing, offer free shipping over $100

---

## Roadmap

### Phase 1: Basic Prints (V5)
- [ ] Standard sizes (8x10, 16x20, 24x36)
- [ ] Printful integration
- [ ] Basic checkout flow
- [ ] Certificate of authenticity

### Phase 2: Framing (V5.1)
- [ ] Frame options (black, white, walnut)
- [ ] Mat board selection
- [ ] Museum glass upgrade

### Phase 3: Limited Editions (V6)
- [ ] DP signed prints
- [ ] Director signed prints
- [ ] Numbered certificates
- [ ] Limited drop releases

### Phase 4: Custom (V6.1)
- [ ] Custom sizes
- [ ] Gallery installations (5+ prints)
- [ ] Corporate/commercial licensing
- [ ] White-glove framing service

---

## Example: Limited Edition Drop

**"The Lighthouse Collection"**
*Signed by Jarin Blaschke (DP, Oscar-nominated)*

- 25 prints total
- 24x36" size
- Hahnemühle Photo Rag paper
- Black museum frame
- Signed + numbered by DP
- Certificate with film notes
- **Price: $650**

**Marketing:**
- Email to CineBox users who saved Lighthouse scenes
- A24 social promotion
- Jarin Blaschke video message
- Limited availability (creates urgency)

**Expected Revenue:**
- 25 prints × $650 = $16,250
- A24 share (60%): $9,750
- CineBox (40%): $6,500

---

**Document Version**: 1.0
**Last Updated**: 2026-02-12
**Owner**: Renaise Kim (agent gawd)
**Status**: Strategic Proposal
