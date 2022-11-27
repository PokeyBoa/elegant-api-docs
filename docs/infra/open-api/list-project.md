# List Project <Badge type="tip" text="v1" vertical="middle" />

> Description: Get all project requirements work orders.

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
      https://${HOST}/api/v1/project
    </td>
  </tr>
  <tr>
    <td style="font-weight: 600;">HTTP Method</td>
    <td style="font-size: 12px;">
      <span style="border: 1px solid; background-color: rgb(66,205,101); color: rgb(84,139,84); box-sizing: border-box; padding: 3px 8px; font-weight: 500; border-radius: 2px; line-height: 22px;">
        GET
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
    <td>Authorization</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <b>Value format:&nbsp;</b>"Bearer&nbsp;<code>access_token</code>"<br/>
      <b>Example value:&nbsp;</b>"Bearer t-yti4mda1zdktn5zxcvzm1nztaxzgjk"
    </td>
  </tr>
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
    <td>version</td>
    <td>string</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      API version
      </span><br/>
      <b>Fixed value: </b>"v1"
    </td>
  </tr>
  <tr>
    <td>limit</td>
    <td>number</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      Limit the number of rows returned from a query
      </span><br/>
      <b>Example: </b>5<br/>
      <b>Default value: </b>0
    </td>
  </tr>
  <tr>
    <td>offset</td>
    <td>number</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      Offset omit a specified number of rows 
      </span><br/>
      <b>Example: </b>20<br/>
      <b>Default value: </b>0
    </td>
  </tr>
</tbody>
</table>

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
    <td>-</td>
    <td>
      <span style="color: DimGray;">-</span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟counts</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      The number returned by the query, the number of elements in the result object.
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟statistics</td>
    <td>number{}</td>
    <td>
      <span style="color: DimGray;">
      Statistics data
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟total</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      Total number of project work orders
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟complete</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      The number of project work orders completed
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟processing</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      The number of project work orders in progress
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟todo</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      The number of pending project work orders
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟result</td>
    <td>object[]</td>
    <td>
      <span style="color: DimGray;">
      Project information list
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟project_id</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      Unique ID of the project
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟project_name</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      The name of the project
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟site_name</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      The name of the delivery site
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟site_code</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      Code name of delivery site
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟order_url</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      Project work order url address
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟pmo_name</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      Pmo project manager name
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟delivery_date</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      Expected delivery date
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟work_flow</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      Project workflow progress description
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟is_done</td>
    <td>boolean</td>
    <td>
      <span style="color: DimGray;">
      Is it done
      </span>
    </td>
  </tr>
</tbody>
</table>

### Response body example

```bash
# request example command:
# -i, --include             // Include the HTTP response headers in the output.
# -k, --insecure            // Skip SSL inspection.
# -L, --location            // Make HTTP requests follow server redirects.
# -X, --request             // Specifies the method of the HTTP request.
# -H, --header              // Add additional HTTP request headers.
# -4, --ipv4                // Resolve names to IPv4 addresses only.
curl -i -k -L -X GET \
-H 'Authorization: Bearer t-yti4mda1zdktn5zxcvzm1nztaxzgjk' \
-4 'https://127.0.0.1:8000/api/v1/project/?limit=2&offset=50'
```

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "counts": 2,
        "statistics": {
            "total": 78,
            "complete": 63,
            "processing": 3,
            "todo": 12
        },
        "result": [
            {
                "project_id": 107,
                "project_name": "CNSHA018上海虹桥正荣中心南区2号楼6层扩建项目",
                "site_name": "上海市闵行区申虹路666弄8号楼(近兴虹路)",
                "site_code": "CNSHA018",
                "order_url": "https://help.example.net/browse/IT-9828574",
                "pmo_name": "卢新",
                "delivery_date": "2022-10-03 18:00:00",
                "work_flow": "新需求",
                "is_done": false
            },
            {
                "project_id": 108,
                "project_name": "CNHGH003杭州华润万象城新建项目",
                "site_name": "浙江省杭州市上城区富春路701号",
                "site_code": "CNHGH003",
                "order_url": "https://help.example.net/browse/IT-9828575",
                "pmo_name": "侯婧瑶",
                "delivery_date": "2022-10-06 09:30:00",
                "work_flow": "新需求",
                "is_done": false
            }
        ]
    }
}
```

## Error code

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 18%;">HTTP status code</th>
    <th style="width: 15%;">Error code</th>
    <th style="width: calc(740px/3);">Description</th>
    <th style="width: auto;">Troubleshooting suggestions</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>400</td>
    <td>45001</td>
    <td>access frequency is limited</td>
    <td>The request frequency exceeds the limit, try again after 60s.</td>
  </tr>
</tbody>
</table>

<div class="Copyright" style="margin-top:100px; font-size: 12px; height: 20px; line-height: 20px; background: none;">
  <!--使用flex布局，文本垂直居中-->
  <div style="display: flex; flex-direction: row; justify-content: space-between;">
    <a href="https://open.feishu.cn/" style="text-decoration: none;">
      <span style="color: CadetBlue;">Refer to Feishu Open Platform</span>
    </a>
    <span style="color: #666666; font-size: 12px;">@&nbsp;Pokeya</span>
  </div>
</div>
