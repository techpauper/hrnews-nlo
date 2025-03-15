
export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  categoryId: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "eviction",
    name: "Eviction Rights",
    description: "Information about laws protecting tenants from unlawful evictions"
  },
  {
    id: "foreclosure",
    name: "Foreclosure",
    description: "Understanding the foreclosure process and your rights"
  },
  {
    id: "property-taxes",
    name: "Property Taxes",
    description: "Information about property tax assessments, appeals, and exemptions"
  },
  {
    id: "repairs",
    name: "Repairs & Maintenance",
    description: "Rights and responsibilities regarding home repairs and maintenance"
  },
  {
    id: "discrimination",
    name: "Housing Discrimination",
    description: "Laws protecting homeowners from discrimination"
  }
];

export const articles: Article[] = [
  {
    id: "understanding-eviction-moratoriums",
    title: "Understanding Eviction Moratoriums: A Homeowner's Guide",
    subtitle: "What property owners need to know about current protections",
    excerpt: "Recent legislation has created new protections for both homeowners and tenants. This comprehensive guide explains how eviction moratoriums work and what they mean for your property.",
    content: `
      <p class="newspaper-lead">Recent federal and state legislation has created unprecedented protections for homeowners and tenants facing financial hardship. These "eviction moratoriums" have temporarily changed the landscape of housing law, but understanding their details is crucial.</p>
      
      <div class="newspaper-columns-2">
        <p class="newspaper-body">Eviction moratoriums are temporary government orders that prevent landlords from evicting tenants for nonpayment of rent during specified periods. These measures were implemented broadly during the COVID-19 pandemic but continue to exist in various forms in many jurisdictions.</p>
        
        <p class="newspaper-body">For homeowners who rent property, these moratoriums may impact your ability to remove non-paying tenants. However, most moratoriums include important exceptions for situations involving criminal activity, property damage, or other lease violations unrelated to payment.</p>
        
        <p class="newspaper-body">It's important to note that moratoriums don't forgive rent – they simply delay the legal process of eviction. Tenants still owe all unpaid rent, and landlords can pursue collection through other legal means.</p>
        
        <p class="newspaper-body">Many jurisdictions have accompanying programs to help both tenants and landlords. These may include rental assistance funds that pay landlords directly for tenants who qualify, tax benefits for property owners who voluntarily forgive rent, and mediation services to help reach payment agreements.</p>
        
        <p class="newspaper-body">If you're a homeowner facing foreclosure, similar protections may apply to your situation. Many mortgage holders have offered forbearance options, allowing homeowners to temporarily pause or reduce payments during financial hardship. These programs typically require contacting your loan servicer directly.</p>
        
        <p class="newspaper-body">Both landlords and homeowners should be aware that violating eviction moratoriums can result in significant legal penalties. Courts have generally upheld these emergency measures as constitutional, though legal challenges continue in some jurisdictions.</p>
        
        <p class="newspaper-body">For the most current information on eviction protections in your area, consult your state housing department or a qualified housing attorney. Local legal aid organizations often provide free resources explaining current protections specific to your location.</p>
      </div>
    `,
    author: "Patricia Hernandez",
    date: "2023-05-15",
    categoryId: "eviction",
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "foreclosure-process-explained",
    title: "The Foreclosure Process Explained: Timelines and Options",
    subtitle: "Understanding each stage of foreclosure and how to respond",
    excerpt: "Facing foreclosure can be overwhelming, but knowing the process gives homeowners more control. Learn about the timeline, your rights, and options for avoiding foreclosure.",
    content: `
      <p class="newspaper-lead">Foreclosure is a legal process where a lender attempts to recover the balance of a loan from a borrower who has stopped making payments by forcing the sale of the asset used as collateral for the loan. While intimidating, understanding each stage gives homeowners valuable time to explore alternatives.</p>
      
      <div class="newspaper-columns-2">
        <p class="newspaper-body">The foreclosure process typically begins after multiple missed mortgage payments, usually three or more. At this point, lenders will send a "Notice of Default" or similar document formally notifying the homeowner that the foreclosure process has begun.</p>
        
        <p class="newspaper-body">From this initial notice, the timeline varies significantly by state. In "judicial foreclosure" states, lenders must file a lawsuit and get court approval before foreclosing, which can take many months. In "non-judicial foreclosure" states, lenders can proceed more quickly through a series of required notices and waiting periods without court involvement.</p>
        
        <p class="newspaper-body">Throughout this process, homeowners have rights that lenders must respect. These include the right to receive proper notification, opportunities to cure the default by paying the past-due amount, and in many cases, a redemption period even after foreclosure where the homeowner can reclaim the property by paying the full amount owed.</p>
        
        <p class="newspaper-body">Perhaps most importantly, homeowners have options to avoid foreclosure entirely. These include loan modification (changing the terms of the mortgage to make payments more affordable), forbearance (temporarily reducing or suspending payments), refinancing (if you qualify for a new loan with better terms), or a short sale (selling the home for less than is owed, with the lender's permission).</p>
        
        <p class="newspaper-body">Government programs may also provide assistance. The federal Homeowner Assistance Fund, created under the American Rescue Plan, provides money to states to help homeowners with mortgage payments, taxes, insurance, and other housing costs. Eligibility and available funds vary by state.</p>
        
        <p class="newspaper-body">Housing counseling agencies approved by the Department of Housing and Urban Development (HUD) offer free advice and assistance to homeowners facing foreclosure. These counselors can help you understand your options, communicate with your lender, and apply for assistance programs.</p>
        
        <p class="newspaper-body">The key to successfully navigating potential foreclosure is acting quickly. Most options become more limited as the process advances, so contacting your lender, seeking legal advice, or consulting a housing counselor at the first sign of trouble provides the best chance of keeping your home.</p>
      </div>
    `,
    author: "Michael Rodriguez",
    date: "2023-06-03",
    categoryId: "foreclosure",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "appealing-property-tax-assessments",
    title: "How to Successfully Appeal Your Property Tax Assessment",
    subtitle: "A step-by-step guide to challenging an inflated valuation",
    excerpt: "Property taxes based on incorrect assessments cost homeowners thousands of dollars. Learn the process for appealing your assessment and potentially reducing your tax burden.",
    content: `
      <p class="newspaper-lead">Property tax assessments can sometimes overvalue your home, resulting in unnecessarily high tax bills. The good news is that most jurisdictions have a straightforward process for appealing these assessments, and many homeowners who appeal receive reductions.</p>
      
      <div class="newspaper-columns-2">
        <p class="newspaper-body">The first step in any appeal is understanding how your property was assessed. Your local tax assessor's office should provide information about how they determined your property's value. This typically includes factors like recent sales of comparable properties, the cost to replace your home, and potential rental income.</p>
        
        <p class="newspaper-body">Once you have this information, look for discrepancies or errors. Common issues include incorrect square footage, miscounted bedrooms or bathrooms, overlooked structural problems, or failure to account for negative factors affecting value (like proximity to commercial areas or busy roads).</p>
        
        <p class="newspaper-body">You'll also want to research comparable properties in your neighborhood. If similar homes are assessed at lower values, this can provide strong evidence for your appeal. Most assessor's offices maintain public records of property assessments that you can search online.</p>
        
        <p class="newspaper-body">The appeal process itself varies by location but generally begins with an informal review. Contact your assessor's office to request this review and present your evidence. Many assessment disputes are resolved at this stage without further proceedings.</p>
        
        <p class="newspaper-body">If the informal review doesn't result in a satisfactory adjustment, you can file a formal appeal with your local board of assessment appeals or similar body. This typically involves submitting forms, paying a modest filing fee, and attending a hearing where you present your case.</p>
        
        <p class="newspaper-body">For the hearing, organize your evidence clearly and concisely. Focus on factual information rather than complaints about tax rates. Consider obtaining a private appraisal to support your claim, especially for high-value properties where the potential savings outweigh the cost of the appraisal.</p>
        
        <p class="newspaper-body">Be aware of deadlines, which are strictly enforced in most jurisdictions. Appeals typically must be filed within 30-90 days after receiving your assessment notice, though the exact timeframe varies by location.</p>
        
        <p class="newspaper-body">Finally, if your formal appeal is unsuccessful, many jurisdictions allow further appeals to a state board or tax court. These proceedings may be more complex and might require legal representation, so weigh the potential savings against the additional cost and effort.</p>
      </div>
    `,
    author: "Sarah Johnson",
    date: "2023-07-12",
    categoryId: "property-taxes",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "landlord-repair-obligations",
    title: "Landlord Repair Obligations: What the Law Requires",
    subtitle: "Understanding what repairs landlords must make and how to enforce your rights",
    excerpt: "Landlords have legal obligations to maintain habitable properties. This article outlines what repairs landlords must make, timeframes for completion, and steps tenants can take when landlords fail to meet these obligations.",
    content: `
      <p class="newspaper-lead">All residential landlords are legally required to maintain properties that meet basic habitability standards. These requirements exist regardless of what a lease says or how low the rent might be, providing important protections for tenants living in rental housing.</p>
      
      <div class="newspaper-columns-2">
        <p class="newspaper-body">The concept of a "warranty of habitability" exists in every state, though specific requirements vary by jurisdiction. At minimum, rental properties must generally include functioning plumbing, heating, electricity, and structural integrity. They must also be free from pest infestations and significant health or safety hazards.</p>
        
        <p class="newspaper-body">When repairs are needed to maintain habitability, landlords are required to address them within a reasonable timeframe. What constitutes "reasonable" depends on the nature of the issue – emergency repairs affecting health or safety (like a broken heater in winter) require immediate attention, while less urgent matters may allow more time.</p>
        
        <p class="newspaper-body">The process for requesting repairs should begin with a written notice to your landlord that clearly identifies the problem and requests repair within a specific timeframe. Keep copies of all communications and document the condition with photographs or videos when possible.</p>
        
        <p class="newspaper-body">If a landlord fails to make necessary repairs after proper notice, tenants have several potential remedies, depending on local laws. These may include "repair and deduct" (making the repair yourself and deducting the cost from rent), withholding rent until repairs are made, breaking the lease without penalty due to uninhabitable conditions, or filing a complaint with local housing authorities.</p>
        
        <p class="newspaper-body">Many cities and counties have code enforcement departments that will inspect rental properties and issue violation notices to landlords. These official notices often motivate repairs and create an important paper trail if legal action becomes necessary.</p>
        
        <p class="newspaper-body">In extreme cases of negligence, tenants may be able to sue landlords for damages resulting from their failure to maintain habitable conditions. These lawsuits can potentially recover compensation for property damage, health issues, temporary relocation costs, or reduced rental value.</p>
        
        <p class="newspaper-body">It's important to note that while landlords must maintain habitability, they aren't obligated to make cosmetic improvements or non-essential upgrades. Additionally, if damage is caused by the tenant, their guests, or abnormal use of the property, the tenant may be responsible for repair costs.</p>
        
        <p class="newspaper-body">Understanding these rights and responsibilities helps ensure that rental properties remain safe and livable while providing fair processes for both tenants and landlords to resolve maintenance issues.</p>
      </div>
    `,
    author: "David Chen",
    date: "2023-08-07",
    categoryId: "repairs",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "fair-housing-act-protections",
    title: "Fair Housing Act Protections: What Homeowners Should Know",
    subtitle: "Understanding housing discrimination laws that protect buyers, sellers, and renters",
    excerpt: "The Fair Housing Act prohibits discrimination in housing transactions. This article explains protected characteristics, prohibited practices, and what to do if you experience discrimination.",
    content: `
      <p class="newspaper-lead">The Fair Housing Act (FHA) stands as one of the nation's most important civil rights laws, prohibiting discrimination in the sale, rental, or financing of housing based on protected characteristics. While originally passed in 1968, the law continues to evolve to address contemporary forms of housing discrimination.</p>
      
      <div class="newspaper-columns-2">
        <p class="newspaper-body">Under federal law, the FHA prohibits discrimination based on race, color, national origin, religion, sex (including gender identity and sexual orientation), familial status, and disability. Many state and local laws add additional protections for characteristics like age, source of income, or marital status.</p>
        
        <p class="newspaper-body">These protections apply broadly across housing transactions. Prohibited activities include refusing to sell or rent, setting different terms or conditions, providing different services or facilities, making discriminatory statements, falsely denying availability, or steering potential buyers or renters to particular neighborhoods based on protected characteristics.</p>
        
        <p class="newspaper-body">For homeowners with disabilities, the FHA provides additional rights. Housing providers must make "reasonable accommodations" in rules, policies, practices, or services when necessary for equal opportunity to use and enjoy a dwelling. They must also allow "reasonable modifications" to the physical structure at the tenant's expense (though landlords may be required to restore the property afterward).</p>
        
        <p class="newspaper-body">The law also addresses "discriminatory effect" or "disparate impact" – policies or practices that appear neutral but disproportionately harm members of protected groups without a legitimate business necessity. For example, overly restrictive occupancy limits might disproportionately exclude families with children.</p>
        
        <p class="newspaper-body">If you believe you've experienced housing discrimination, you can file a complaint with the Department of Housing and Urban Development (HUD) within one year of the alleged discrimination. HUD will investigate and, if it finds evidence of discrimination, will attempt conciliation or potentially refer the case to the Department of Justice.</p>
        
        <p class="newspaper-body">Alternatively, you can file a lawsuit in federal or state court within two years. Potential remedies may include compensatory damages, punitive damages, injunctive relief (court orders to stop discrimination), and attorney's fees.</p>
        
        <p class="newspaper-body">For homeowners who are landlords, understanding these protections is crucial to avoid inadvertent discrimination. Maintaining consistent application procedures, clearly defined rental criteria, and well-documented decision-making processes helps ensure compliance with fair housing laws.</p>
        
        <p class="newspaper-body">Local fair housing organizations often provide education and resources to help both housing providers and consumers understand their rights and responsibilities under these important civil rights protections.</p>
      </div>
    `,
    author: "Amara Williams",
    date: "2023-09-20",
    categoryId: "discrimination",
    imageUrl: "https://images.unsplash.com/photo-1568385247005-0d371d214a2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "homeowners-insurance-claims",
    title: "Maximizing Homeowners Insurance Claims After Damage",
    subtitle: "Expert strategies for documenting damage and negotiating with insurers",
    excerpt: "Filing an insurance claim after home damage can be complicated. Learn how to document damage, understand policy coverage, and negotiate effectively with insurance adjusters.",
    content: `
      <p class="newspaper-lead">When disaster strikes your home, navigating the insurance claims process effectively can make a significant difference in your recovery. Understanding how to document damage, interpret your policy, and negotiate with adjusters helps ensure you receive the full compensation you're entitled to.</p>
      
      <div class="newspaper-columns-2">
        <p class="newspaper-body">The claims process begins immediately after discovering damage. Your first priority should be preventing further damage through reasonable temporary measures – covering broken windows, shutting off water sources for leaks, or tarping damaged roofs. Most policies require these mitigation efforts and will cover their reasonable cost.</p>
        
        <p class="newspaper-body">Documentation is critical to a successful claim. Take extensive photographs and videos of all damage before making any repairs or cleanup. Create a detailed inventory of damaged items, including descriptions, approximate age, estimated value, and if possible, receipts for major purchases.</p>
        
        <p class="newspaper-body">When filing your claim, provide this documentation along with a clear timeline of events. Report the claim promptly – most policies specify a timeframe for reporting damage, and delays could jeopardize coverage. Request a copy of your complete policy if you don't have one, as this document controls what's covered.</p>
        
        <p class="newspaper-body">Once your claim is filed, the insurance company will assign an adjuster to inspect the damage and determine the payout amount. Remember that this adjuster works for the insurance company – their assessment may not fully capture the extent of your loss.</p>
        
        <p class="newspaper-body">Consider hiring a public adjuster, particularly for large or complex claims. Unlike company adjusters, public adjusters work exclusively for you, helping document damage, interpret policy language, and negotiate with the insurance company. They typically charge a percentage of the claim amount but often secure larger settlements that more than offset their fee.</p>
        
        <p class="newspaper-body">Don't accept the first settlement offer if it seems insufficient. Request an itemized explanation of how the adjuster reached their figure and be prepared to provide contractor estimates that demonstrate the actual cost of repairs. Negotiations are normal in the claims process – insurers expect policyholders to advocate for fair compensation.</p>
        
        <p class="newspaper-body">If disputes arise, most states have a process for resolving insurance disagreements that involve appraisal clauses in policies. This allows each party to select an independent appraiser, with a third neutral umpire making final decisions if the appraisers disagree.</p>
        
        <p class="newspaper-body">Throughout this process, maintain detailed records of all communications with your insurance company, including dates, names, and summaries of conversations. This documentation proves invaluable if disputes require escalation to regulatory authorities or legal action.</p>
      </div>
    `,
    author: "Robert Thompson",
    date: "2023-10-05",
    categoryId: "repairs",
    imageUrl: "https://images.unsplash.com/photo-1559593184-a7d95bf8654f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  }
];

// Helper function to sort by date
const sortByLatestDate = (articles: Article[]): Article[] => {
  return [...articles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return sortByLatestDate(articles.filter(article => article.categoryId === categoryId));
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getFeaturedArticles = (): Article[] => {
  return sortByLatestDate(articles.filter(article => article.featured));
};

export const getRecentArticles = (count: number = 3): Article[] => {
  return sortByLatestDate(articles).slice(0, count);
};
