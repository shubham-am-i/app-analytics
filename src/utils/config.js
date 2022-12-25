import moment from 'moment/moment'
import millify from 'millify'

export const tableHeading = ['Date', 'App', 'Requests', 'Responses', 'Impressions', 'Clicks', 'Revenue', 'Fill_rate', 'CTR']

export const allColumns = ['date', 'app', 'requests', 'responses', 'impressions', 'clicks', 'revenue', 'fill_rate', 'CTR']

export let visibleColumns = {
  date: true,
  app: true,
  requests: true,
  responses: true,
  impressions: true,
  clicks: true,
  revenue: true,
  fill_rate: true,
  CTR: true,
}

export const formatData = (record) => {
  record.date = moment(record.date).format('D MMM YY')
  record.fill_rate = (+((record.requests / record.responses) * 100).toFixed(2)).toString().concat('%')
  record.CTR = (+((record.clicks / record.impressions) * 100).toFixed(2)).toString().concat('%')
  record.requests = millify(record.requests, {
    lowercase: true,
  })
  record.responses = millify(record.responses, {
    lowercase: true,
  })
  record.clicks = millify(record.clicks, {
    precision: 2,
    decimalSeparator: ',',
    lowercase: true,
  })
  record.impressions = millify(record.impressions, {
    precision: 2,
    decimalSeparator: ',',
    lowercase: true,
  })
  record.revenue = millify(record.revenue)
}
