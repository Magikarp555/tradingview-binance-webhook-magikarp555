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

## วิธี restart bot
> sudo kill -9 $(sudo lsof -t -i:443)

## วิธีเช็คว่าบอทรันอยู่ไหม
> lsof -t -i:443