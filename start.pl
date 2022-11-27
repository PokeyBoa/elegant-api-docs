#! /usr/bin/perl
use strict;
use warnings;

my $options = "docs:dev";

print "1. Build Environment\n";
system("yarn");

print "2. Startup project\n";
system("yarn $options");

