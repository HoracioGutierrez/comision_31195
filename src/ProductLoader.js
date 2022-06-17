import Skeleton from 'react-loading-skeleton'

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton height={150} width={150} />
      <Skeleton count={5} width={450} />
    </div>
  )
}


export const ProductLoader = () => {
  return (
    <section className='products-container'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </section>
  )
}