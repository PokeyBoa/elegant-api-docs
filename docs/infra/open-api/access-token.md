# App Access Token <Badge type="tip" text="v1" vertical="middle" />

> Description: Custome applications get `access_token` through this interface.

## Request

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 740px;" colspan="2">Facts</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style="font-weight: 600; width: 25%;">HTTP URL</td>
    <td>
      https://${HOST}/api/v1/auth/app-access-token/
    </td>
  </tr>
  <tr>
    <td style="font-weight: 600;">HTTP Method</td>
    <td style="font-size: 12px;">
      <span style="border: 1px solid; background-color: rgb(255,239,219); color: rgb(255,165,0); box-sizing: border-box; padding: 3px 8px; font-weight: 500; border-radius: 2px; line-height: 22px;">
        POST
      </span>
    </td>
  </tr>
  <tr>
    <td style="font-weight: 600;">API Type</td>
    <td>
      <div style="margin: 1px 0 2px; background: rgba(52,199,36,.2); color: #2ea121; font-size: 12px; line-height: 20px; padding: 0 6px; align-items: center; border-radius: 2px; display: inline-flex;">
        <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 12 12">
          <path d="M5.998 11.49A5.491 5.491 0 115.997.507a5.491 5.491 0 01.001 10.983z" fill="#2EA121"></path>						<path d="M8.768 5.373a.69.69 0 00-.002-.975.689.689 0 00-.975-.003L5.346 6.84 4.204 5.698a.687.687 0 00-.972.006.686.686 0 00-.006.97c.589.588 1.178 1.175 1.765 1.765a.501.501 0 00.71 0c1.02-1.026 2.045-2.045 3.067-3.066z" fill="#fff"></path>
        </svg>
        <span style="font-weight: 500; margin-left: 6px;">
          OpenAPI
        </span>
      </div>
    </td>
  </tr>
</tbody>
</table>

### Request header

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 12.5%;">Type</th>
    <th style="width: 12.5%;">Required</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Content-Type</td>
    <td>string</td>
    <td>No</td>
    <td><b>Fixed value:&nbsp;</b>"application/json; charset=utf-8"</td>
  </tr>
</tbody>
</table>

### Query parameters

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 12.5%;">Type</th>
    <th style="width: 12.5%;">Required</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>token_type</td>
    <td>number</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      Choose an authentication method
      </span><br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>1</code>&emsp;&emsp;// Basic token<br/>
      &ensp;• <code>2</code>&emsp;&emsp;// Bearer token<br/>
      <b>Default value: </b>1
    </td>
  </tr>
</tbody>
</table>

### Request body

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 12.5%;">Type</th>
    <th style="width: 12.5%;">Required</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>app_id</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      The unique identifier of the application.
      </span><br/>
      <b>Example: </b>"cli_dxR91es6mx3"
    </td>
  </tr>
  <tr>
    <td>app_secret</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Application key, obtained after creating the application.
      </span><br/>
      <b>Example: </b>"zh6M7Kodq51ZFf9yExsTtB"
    </td>
  </tr>
</tbody>
</table>

### Request body example

```json
 {
    "app_id": "cli_dxR91es6mx3",
    "app_secret": "zh6M7Kodq51ZFf9yExsTtB"
 }
```

## Response

### Response body

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 25%;">Type</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>code</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      Error code, non-0 means failure.
      </span><br/>
      <b>Example: </b>0
    </td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      Error description. <br/>
      It can't be used as an sign of whether the request was successful or not.
      </span><br/>
      <b>Example: </b>"success"
    </td>
  </tr>
  <tr>
    <td>data</td>
    <td>object{}</td>
    <td>
      <span style="color: DimGray;">
      🔎 See example for details.
      </span>
    </td>
  </tr>
</tbody>
</table>

### Response body example

Example 1

```bash
# request example command:
curl --location -X POST 'https://127.0.0.1:8000/api/v1/auth/app-access-token/?token_type=1' \
--header 'Content-Type: application/json' \
--data-raw ' {
    "app_id": "cli_dxR91es6mx3",
    "app_secret": "zh6M7Kodq51ZFf9yExsTtB"
 }'
```

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "username": "$sign$cli_ulrvwf8jodkqb2mn$1669490245.442403",
        "password": "6333053e4a23121c6e9dd085082f3aab26c5a5090c997fd9f37a51802d116e07",
        "token_data": {
            "token_type": "Basic",
            "token_expiry_date": "2022-11-27 09:17:25"
        },
        "owner_info": [
            {
                "owner": "皮卡丘",
                "email": "pikachu@mail.com"
            }
        ],
        "app_info": {
            "app_id": "cli_dxR91es6mx3",
            "app_secret": "zh6M7Kodq51ZFf9yExsTtB"
        }
    }
}
```

Example 2

```bash
# request example command:
curl --location -X POST 'https://127.0.0.1:8000/api/v1/auth/app-access-token/?token_type=2' \
--header 'Content-Type: application/json' \
--data-raw ' {
    "app_id": "cli_dxR91es6mx3",
    "app_secret": "zh6M7Kodq51ZFf9yExsTtB"
 }'
```

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "Authorization": "Bearer t-yjq2nmnhy2mtmzk4ns00mgeyltzmnhywnimzdkywzl",
        "token_data": {
            "token_type": "Bearer",
            "access_token": "t-yjq2nmnhy2mtmzk4ns00mgeyltzmnhywnimzdkywzl",
            "token_expiry_date": "2022-11-27 09:19:20"
        },
        "owner_info": [
            {
                "owner": "皮卡丘",
                "email": "pikachu@mail.com"
            }
        ],
        "app_info": {
            "app_id": "cli_dxR91es6mx3",
            "app_secret": "zh6M7Kodq51ZFf9yExsTtB"
        }
    }
}
```

<div class="Copyright" style="margin-top:100px; font-size: 12px; height: 20px; line-height: 20px; background: none;">
  <!--使用flex布局，文本垂直居中-->
  <div style="display: flex; flex-direction: row; justify-content: space-between;">
    <a href="https://open.feishu.cn/" style="text-decoration: none;">
      <span style="color: CadetBlue;">Refer to Feishu Open Platform</span>
    </a>
    <span style="color: #666666; font-size: 12px;">@&nbsp;Pokeya</span>
  </div>
</div>
