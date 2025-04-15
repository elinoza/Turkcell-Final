import ButtonDefault from '@/app/_components/ui/Buttons/ButtonDefault'
import { useTranslations } from 'next-intl'
import React from 'react'

const Testimonials = () => {
    const t  = useTranslations("HomePage")
  return (
    <div>
              <div className="d-flex flex-column gap-5 justify-content-center align-items-start">
        <h1>{t("testimonials.title")}</h1>
        <p className="fw-bold">{t("testimonials.content")}</p>
        <p className="body3 text-secondary">{t("testimonials.description")}</p>
        <div className="d-flex align-items-center gap-2"> <span className='rounded-circle bg-secondary2'></span>
        <span className='rounded-circle bg-secondary2'></span>
        <span className='rounded-circle bg-secondary2'></span></div>
<div><ButtonDefault className='text-primary'> 30+</ButtonDefault> {t("testimonials.reviewsCount")}</div>
      </div></div>
  )
}

export default Testimonials