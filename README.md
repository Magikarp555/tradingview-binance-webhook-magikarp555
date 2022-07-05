# TridingView Binance Webhook extended by Magikarp555

เอาโค้ดของเสี่ยมาโมเพิ่มเพิ่มฟังค์ชั่นนิดหน่อยครับ สามารพรันช้อนกับของเสี่ยได้เลย

## วิธีติดตั้ง
เหมือนของเสี่ยทุกอย่าง แก้เพียงแค่ตามนี้

> git clone https://github.com/magikarp555/tradingview-binance-webhook-magikarp555.git

> cd tradingview-binance-webhook-magikarp555

webhook url ที่ใช้แก้จาก
http://ipaddress/tradingview/code
เติมเลข port กับเติมเลข2ท้าย tradingview เป็น
http://ipaddress:443/tradingview2/code

คำสั่ง
{{ticker}}_short_2_50_true_false

{{ticker}}_long_2_50_true_false

{{ticker}}_[side]__[leverage]_[amount_usd]_[set_tp]_[set_sl]

ตัวอย่าง: long/short  ตัวคูณ  จำนวนusd    true/false  true/false

## 

## จุดที่ต้องระวัง
เวลาเราไปเพิ่ม alert webhook บน tradingview มันจะจำค่า url เดิมไว้ ถ้าจะกลับไปใช้ของเสี่ย ก็อย่าลืมไปแก้กลับด้วย

## คำสั่งรันบอท
> ts-node src/index.ts &

## คำสั่ง หยุดบอท
> sudo kill -9 $(sudo lsof -t -i:443)

## คำสั่งเช็คว่าบอทรันอยู่ไหม
> lsof -t -i:443