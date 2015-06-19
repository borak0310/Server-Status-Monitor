# Server-Status-Monitor<br>

#構想: 
SERVER 管理者可以透過APP簡單的了解平台的 CPU,MEMORY,最吃效能的前幾支process<br>

#作法:<br>
1.建一台SERVER當作一台資訊中心<br>

2.受監控SERVER每分鐘 RUN 一支 SH ,透過WS帶參數呼監控中心將目前的SERVER狀況回報<br>
EX: {IP:XXXX,CPU:XXXX,MEMORY:XXXX,JBOSS_INS_COUNT:XXXXX}<br>

3.APP向SERVER取得目前受監控SERVER的系統效能(SERVER透過推波ALERT CPU衝高,或記憶體已接近負載的SERVER資訊)<br>

#進階版:<br>
1.透過手機重啟環境<br>

2.透過手機重啟整台SERVER<br>

設計:<br>
(detail - bower.json)<br>
1. angularJs<br>
2. front-end template - html5-boilerplate<br>
3. RWD Framework -pure<br>
