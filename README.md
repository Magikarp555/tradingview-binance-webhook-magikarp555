# TridingView Binance Webhook extended by Magikarp555

เอาโค้ดของเสี่ยมาโมเพิ่มเพิ่มฟังค์ชั่นนิดหน่อยครับ

## วิธีติดตั้ง
เหมือนของเสี่ยทุกอย่าง แก้เพียงแค่ตามนี้

> git clone https://github.com/magikarp555/tradingview-binance-webhook-magikarp555.git

> cd tradingview-binance-webhook-magikarp555

webhook url ที่ใช้แก้จาก
http://ipaddress/tradingview/code
เติมเลข2ท้าย tradingview เป็น
http://ipaddress/tradingview2/code

คำสั่ง
{{ticker}}_short_2_50_true_false

{{ticker}}_long_2_50_true_false

{{ticker}}_[side]__[leverage]__[amount_usd]__[set_tp]__[set_sl]

## จุดที่ต้องระวัง
บอทนี้รันซ้อนกับของเสี่ยไม่ได้ เนื่องจากใช้port 80 เหมือนกัน ต้องแยก account binance นะครับ

เวลาเราไปเพิ่ม alert webhook บน tradingview มันจะจำค่า url เดิมไว้ ถ้าจะกลับไปใช้ของเสี่ย ก็อย่าลืมไปแก้กลับด้วย

## คำสั่งรันบอท
> ts-node src/index.ts &

## คำสั่ง หยุดบอท
> sudo kill -9 $(sudo lsof -t -i:80)

## คำสั่งเช็คว่าบอทรันอยู่ไหม
> lsof -t -i:80