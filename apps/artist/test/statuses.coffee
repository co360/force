_ = require 'underscore'
sinon = require 'sinon'
Backbone = require 'backbone'
{ fabricate } = require 'antigravity'
Artist = require '../../../models/artist'
getStatuses = require '../statuses'

describe 'getStatuses', ->
  beforeEach ->
    @artist = new Artist fabricate 'artist', id: 'foobar'
    sinon.stub Backbone, 'sync'

  afterEach ->
    Backbone.sync.restore()

  it 'fetches the status of everything', ->
    getStatuses(@artist)
    _.map(Backbone.sync.args, (args) -> args[1].url).should.eql [
      'undefined/api/v1/search/filtered/artist/foobar/suggest'
      'undefined/api/v1/related/shows?artist[]=foobar&sort=-end_at'
      'undefined/api/v1/related/posts?artist[]=foobar'
      'undefined/api/v1/related/layer/main/artists?artist[]=foobar&exclude_artists_without_artworks=true'
      'undefined/api/v1/related/layer/contemporary/artists?artist[]=foobar&exclude_artists_without_artworks=true'
      'undefined/artist/data/foobar/publications?merchandisable[]=false'
      'undefined/artist/data/foobar/publications?merchandisable[]=true'
      'undefined/artist/data/foobar/publications'
      'undefined/artist/data/foobar/collections'
      'undefined/artist/data/foobar/exhibitions'
    ]

  it 'resolves with the statuses', (done) ->
    getStatuses(@artist).then (statuses) ->
      statuses.should.eql {
        artworks: true
        # In this instance shows and posts return false because of their
        # parse methods which do some client-side filtering. Everything
        # else is going to be purely existential
        shows: false
        posts: false
        artists: true
        contemporary: true
        articles: true
        merchandisable: true
        bibliography: true
        collections: true
        exhibitions: true
      }
      done()
    successes = _.map(Backbone.sync.args, (args) -> args[2].success)
    successes[0] total: 1
    _.each(successes[1..-1], (success) -> success([{}]))
