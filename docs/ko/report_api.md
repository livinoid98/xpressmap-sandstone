## 1. Bing-Map 기반 API 목록

---

### 지도 이미지 조회 API

!!! note "지도 이미지 조회 API"

    > Bing Map 기반의 지도에서 레포트 이미지를 조회할 때 사용하는 API

    ??? note "Request"

        ```
        POST /api/maps/bing-map
        ```

    ??? note "Info"

        !!! note "파라미터 목록"

            | 이름       | 타입   | 설명               | 유효성 검증                           |
            | :--------- | :----- | :----------------- | :------------------------------------ |
            | projectSeq | Number | primary key        | tm_project에 존재                     |
            | queryType  | String | 쿼리 타입          | tm_query에 존재 (dish_ct_draw_map 등) |
            | filter     | Object | 쿼리 필터 파라미터 | tm_query의 request_params 형식과 동일 |


        !!! note "요청 예시"

            ```json
            {
                "projectSeq": 1,
                "queryType": "dish_ct_draw_map",
                "filter": {
                    "mdlSeq": 12345,
                    "paraKey": 1
            }
            ```

    ??? failure "Error"

        !!! note "에러 메시지 코드"

            | 에러 코드       | 설명   |
            | :--------- | :----- |
            | INVALID_PROJECT_SEQ | 유효하지 않은 projectSeq |
            | INVALID_QUERY_TYPE  | 유효하지 않은 queryType |
            | INVALID_FILTER     | 	유효하지 않은 filter 형식 |
            | SERVER_ERR | 서버 에러 |

        !!! note "에러 예시"

            ```json
            {
                "status": 400,
                "error": "Bad Request",
                "message": "INVALID_PROJECT_SEQ"
            }
            ```

## 2. 인빌딩 기반 API 목록

---

### 지도 이미지 조회 API

!!! note "지도 이미지 조회 API"

    > 인빌딩 기반의 지도에서 레포트 이미지를 조회할 때 사용하는 API

    ??? note "Request"

        ```
        POST /api/maps/inbuilding
        ```

    ??? note "Info"

        !!! note "파라미터 목록"

            | 이름       | 타입   | 설명               |
            | :--------- | :----- | :----------------- |
            | projectSeq | Number | 프로젝트 식별자       |
            | queryType  | String | 쿼리 타입 (inbuild_ss_walk_draw_aml 등) |         |
            | filter     | Object | 쿼리 필터 파라미터 |


        !!! note "요청 예시"

            ```json
            {
                "projectSeq": "aga",
                "queryType": "inbuild_ss_walk_draw_map",
                "filter": {
                    "mdlSeq": 12345,
                    "paraKey": 1
                }
            }
            ```

    ??? failure "Error"

        !!! note "에러 메시지 코드"

            | 에러 코드       | 설명   |
            | :--------- | :----- |
            | INVALID_PROJECT_SEQ | 유효하지 않은 projectSeq |
            | INVALID_QUERY_TYPE  | 유효하지 않은 queryType |
            | INVALID_FILTER     | 	유효하지 않은 filter 형식 |
            | SERVER_ERR | 서버 에러 |

        !!! note "에러 예시"

            ```json
            {
                "status": 400,
                "error": "Bad Request",
                "message": "INVALID_PROJECT_SEQ"
            }
            ```

## 3. 레전드 API 목록

---

### 조회 API

!!! note "조회 API"

    > 레전드를 조회하는 API

    ??? note "Request"

        ```
        POST /api/maps/{mapType}/legends
        ```

    ??? note "Info"

        !!! note "파라미터 목록"

            | 이름       | 타입   | 설명               |
            | :--------- | :----- | :----------------- |
            | projectSeq | Number | 프로젝트 식별자       |
            | filter  | Object | 쿼리 필터 파라미터 |

        !!! note "요청 예시"

            ```json
            {
                "projectSeq": "aga",
                "filter": {
                    "mdlSeq": 12345
                }
            }
            ```

    ??? failure "Error"

        !!! note "에러 메시지 코드"

            | 에러 코드       | 설명   |
            | :--------- | :----- |
            | INVALID_PROJECT_SEQ | 유효하지 않은 projectSeq |
            | INVALID_FILTER     | 	유효하지 않은 filter 형식 |
            | SERVER_ERR | 서버 에러 |

        !!! note "에러 예시"

            ```json
            {
                "status": 400,
                "error": "Bad Request",
                "message": "INVALID_PROJECT_SEQ"
            }
            ```
