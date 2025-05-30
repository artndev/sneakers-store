import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config.json'

const AppProductBack: React.FC<IProductBackProps> = ({
  id,
  name,
  price,
  currency,
  description,
  image,
}) => {
  return (
    <Card className="gap-[10px]">
      <CardHeader>
        <Link to={`/products/${id}`} className="overflow-hidden mb-[10px]">
          <img
            src={image}
            alt="CardHeader"
            className="object-cover w-full rounded-xl"
          />
        </Link>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{price + config.currencyCodes[currency]}</CardContent>
    </Card>
  )
}

export default AppProductBack
