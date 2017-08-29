Bitcoin Price Fetcher (v0.1)
============================

## Application Overview
- It fetch bitcoin price from the trusty API source.
- It response to user in persimisstic approach. Which mean, it display the price from cache first, then update the cache price in the background so that user can get fastest response time.

## Business Requirement
- Marketing team is going to announce this application publicly, in global-scale.
- Different campaign will be announce along the year, it expected some spike request.
- They want to make sure that our backend system is ready for *really really tremendous* traffic.

## Assumption
- Request are super huge, we need at least `3 micro instances` to support these request.
- User are requesting from all over the world.

## Challenges
- Please describe the design of backend system that will support following criteria
1. Scalability, support for spike request
2. Reliability.
3. Zero-down time
4. Lowest chance of price discrepancy from the trusty API source.
5. High Security
6. Self-healing
7. Cost-efficiency
- Please also create the above design in Google Project Playground, and tell us URL that we can access this app when you submitting assignment.
- If you think you lag of something we didn't provide. Please let us know.
- If you found anything that require developer changes, please let us know in text when you submitting assignment.

## What score ?
- We favour infrastructure-as-a-code
- Zero down time, no single point of failure
- Standardization

